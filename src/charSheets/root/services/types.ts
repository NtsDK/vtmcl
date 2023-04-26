import { CharSheet } from "../domain/charSheet";

export type ServiceToActions<T> = {
  [key in keyof T as T[key] extends (...rest: any[]) => any
    ? key
    : never]: T[key] extends (...rest: infer U) => any
    ? (state: CharSheet, rest: U) => CharSheet
    : never;
};
