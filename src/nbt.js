import * as nbt from 'prismarine-nbt';
import * as snbt from 'nbt-ts';

export * from './EnchantmentTypes';

export function parseStructure(data, mode) {
  let structure;
  
  if (mode === 'snbt') structure = snbt.encode(null, snbt.parse(data));
  else structure = nbt.writeUncompressed(data, 'little');
  return structure;
}

export function writeStructure(data, mode) {
  const structure = parseStructure(data, mode);
  const blob = new Blob([ structure ]);
  const url = window.URL.createObjectURL(blob);
  return url;
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