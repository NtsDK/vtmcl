/** random integer from min (including min) to max (including max) */
export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function applyRange(min: number, max: number, value: number): number {
  return value < min ? min : value > max ? max : value;
}

export function mutateObj<T, S extends keyof T>(
  object: T,
  key: S,
  value: T[S]
): T {
  return {
    ...object,
    [key]: value,
  };
}

export function strToNumber(str: string): number {
  const str2 = str.replace(/\D/g, "");
  return str2 === "" ? 0 : Number(str2);
}
