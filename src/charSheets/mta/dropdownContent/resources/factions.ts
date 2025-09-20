import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
} from "../../../generic/dropdownContent";

import { factionsSource } from "./factionsSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, factionsSource)),
];

export const factions_en: string[] = R.pluck("en", sourceArr);

export const factions_ru: string[] = R.pluck("ru", sourceArr);

export const translateFaction = makeTranslateFunction(sourceArr);
