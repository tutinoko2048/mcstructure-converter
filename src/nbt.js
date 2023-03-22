import * as nbt from 'prismarine-nbt';
import * as snbt from 'nbt-ts';

export const StructureType = {
  nbt: 'nbt',
  snbt: 'snbt'
}

export function writeStructure(data, mode) {
  let structure;
  
  if (mode === StructureType.snbt) structure = snbt.encode(null, snbt.parse(data));
  else structure = nbt.writeUncompressed(JSON.parse(data), 'little');
  
  const blob = new Blob([ structure ]);
  const url = window.URL.createObjectURL(blob);
  return url;
}

export function createItem(typeId = '') {
  return {
    Count: {
      type: "byte",
      value: 1
    },
    Damage: {
      type: "short",
      value: 0
    },
    Name: {
      type: "string",
      value: typeId
    },
    Slot: {
      type: "byte",
      value: 0
    },
    WasPickedUp: {
      type: "byte",
      value: 0
    },
    tag: {
      type: "compound",
      value: {
        display: {
          type: "compound",
          value: {
            Lore: {
              type: "list",
              value: {
                type: "string",
                value: [
                  "say a"
                ]
              }
            },
            Name: {
              type: "string",
              value: ""
            }
          }
        }
      }
    }
  }
}