import * as nbt from 'prismarine-nbt';
import * as snbt from 'nbt-ts';

export * from './EnchantmentTypes';

export function parseStructure(data, mode, isLevelDat) {
  let rawData = nbt.writeUncompressed(data, 'little');
  if (isLevelDat) {
    rawData = fixLevelDat(rawData);
  }
  return rawData;
}

export function writeStructure(data, mode, isLevelDat) {
  const structure = parseStructure(data, mode, isLevelDat);
  const blob = new Blob([ structure ]);
  const url = window.URL.createObjectURL(blob);
  return url;
}

/** 
 * Add extra 8 bytes as header
 * @param {Buffer} dat
 */
function fixLevelDat(dat) {
  // file type
  const fileType = 10;
  const fileTypeData = Buffer.alloc(4, 0);
  fileTypeData.writeInt32LE(fileType);

  // size of level.dat
  const sizeData = Buffer.alloc(4, 0);
  sizeData.writeInt32LE(dat.byteLength);

  // merge it
  return Buffer.concat([fileTypeData, sizeData, dat]);
}

export function createItem(typeId = '') {
  return {
    Count: { type: "byte", value: 1 },
    Damage: { type: "short", value: 0 },
    Name: { type: "string", value: typeId },
    Slot: { type: "byte", value: 0 },
    WasPickedUp: { type: "byte", value: 0 },
    tag: {
      type: "compound",
      value: {
        display: {
          
          type: "compound",
          value: {
            /*
            Lore: {
              type: "list",
              value: { type: "string", value: [] }
            },
            Name: { type: "string", value: "" }
            */
          }
        },/*
        ench: {
          type: "list",
          value: {
            type: "compound",
            value: []
          }
        },
        Unbreakable: {
          type: "byte",
          value: 0
        }*/
      }
    }
  }
}

export function createEnchant(id, level = 1) {
  return {
    id: { type: "short", value: id },
    lvl: { type: "short", value: level }
  }
}