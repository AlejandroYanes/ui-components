import { generateUID } from './generators';

let idCounter = 0;

export function uniqueId(prefix, useHash = false) {
  if (useHash) {
    return `${prefix}-${generateUID()}`;
  }

  idCounter += 1;
  return `${prefix}-${idCounter}`;
}
