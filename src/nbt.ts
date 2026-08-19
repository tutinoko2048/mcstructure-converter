import { Buffer } from 'buffer';
import * as nbt from 'prismarine-nbt';

// prismarine-nbt/protodef refer to Buffer as a global, while browsers do not
// provide Node's global Buffer. The `buffer` package is the browser-compatible implementation.
if (!('Buffer' in globalThis)) Object.assign(globalThis, { Buffer });

export * from './EnchantmentTypes';

export type NbtValue = Record<string, unknown>;

export function parseStructure(data: NbtValue, isLevelDat = false) {
  const rawData = nbt.writeUncompressed(data as nbt.NBT, 'little');
  return isLevelDat ? fixLevelDat(rawData) : rawData;
}

export function writeStructure(data: NbtValue, isLevelDat = false) {
  const output = parseStructure(data, isLevelDat);
  const bytes = output.buffer.slice(output.byteOffset, output.byteOffset + output.byteLength) as ArrayBuffer;
  const blob = new Blob([bytes]);
  return URL.createObjectURL(blob);
}

function fixLevelDat(data: Buffer) {
  const header = Buffer.alloc(8, 0);
  header.writeInt32LE(10, 0);
  header.writeInt32LE(data.byteLength, 4);
  return Buffer.concat([header, data]);
}

export function createItem(typeId = ''): NbtValue {
  return {
    Count: { type: 'byte', value: 1 }, Damage: { type: 'short', value: 0 },
    Name: { type: 'string', value: typeId }, Slot: { type: 'byte', value: 0 }, WasPickedUp: { type: 'byte', value: 0 },
    tag: { type: 'compound', value: { display: { type: 'compound', value: {} } } },
  };
}

export function createEnchant(id: number | null = null, level = 1): NbtValue {
  return { id: { type: 'short', value: id }, lvl: { type: 'short', value: level } };
}
