import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

import { conceptsSource } from "./conceptsSource";

export const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, conceptsSource)),
];

export const concepts_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const concepts_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateConcept = makeTranslateFunction(sourceArr);
