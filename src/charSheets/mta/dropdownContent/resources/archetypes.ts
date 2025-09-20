import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

import { archetypesSource } from "./archetypesSource";

export const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, archetypesSource)),
];

export const archetypes_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const archetypes_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateArchetype = makeTranslateFunction(sourceArr);

// console.log(personalityArchetypes_en, personalityArchetypes_ru, enRuIndex, ruEnIndex);
