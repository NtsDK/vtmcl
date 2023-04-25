/** random integer from min (including min) to max (including max) */
export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
