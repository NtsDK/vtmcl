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
