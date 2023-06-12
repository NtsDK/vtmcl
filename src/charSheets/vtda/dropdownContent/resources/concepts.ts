import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { sourceArr as sourceArr1 } from "../../../vtm/dropdownContent/resources/concepts";

import { conceptsSource, removeConcepts } from "./conceptsSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, conceptsSource)),
  ...sourceArr1.filter(
    (el) => !removeConcepts.includes(el.en) && !removeConcepts.includes(el.ru)
  ),
];

export const concepts_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const concepts_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateConcept = makeTranslateFunction(sourceArr);
