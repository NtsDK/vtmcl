import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
} from "../../../generic/dropdownContent";

import { essencesSource } from "./essencesSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, essencesSource)),
];

export const essences_en: string[] = R.pluck("en", sourceArr);

export const essences_ru: string[] = R.pluck("ru", sourceArr);

export const translateEssence = makeTranslateFunction(sourceArr);
