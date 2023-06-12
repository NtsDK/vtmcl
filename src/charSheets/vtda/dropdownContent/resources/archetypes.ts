import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { sourceArr as sourceArr1 } from "../../../vtm/dropdownContent/resources/archetypes";

import { archetypesSource, removeArchetypes } from "./archetypesSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, archetypesSource)),
  ...sourceArr1.filter(
    (el) =>
      !removeArchetypes.includes(el.en) && !removeArchetypes.includes(el.ru)
  ),
];

export const archetypes_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const archetypes_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateArchetype = makeTranslateFunction(sourceArr);
