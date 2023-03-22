import { CharSheet } from "../domain";

export type StringValueNames = Extract<keyof CharSheet,
  | 'notes'
  | 'alliesAndContacts'
  | 'possessions'
  | 'appearanceDescription'
  | 'characterImage'
  | 'charHistory'
  | 'goals'
>;

export function applyRange(min: number, max: number, value: number) {
  return value < min
    ? min
    : value > max
      ? max
      : value;
}
