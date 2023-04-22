import * as R from "ramda";

import { generationsSource } from "./generationsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
} from "../../../generic/dropdownContent";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, generationsSource)),
];

export const generations_en: string[] = R.pluck("en", sourceArr);

export const generations_ru: string[] = R.pluck("ru", sourceArr);

export const translateGeneration = makeTranslateFunction(sourceArr);

// console.log(personalityArchetypes_en, personalityArchetypes_ru, enRuIndex, ruEnIndex);
