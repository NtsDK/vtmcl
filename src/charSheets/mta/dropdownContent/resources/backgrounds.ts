import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { assert } from "../../../../lib/assert";

import { backgroundsCount, backgroundsSource } from "./backgroundsSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, backgroundsSource)),
];

assert(
  sourceArr.length === backgroundsCount,
  `backgroundsSource should contain ${backgroundsCount} backgrounds`,
);

export const mta_backgrounds_en: string[] = sortStrArr(
  R.pluck("en", sourceArr),
);

export const mta_backgrounds_ru: string[] = sortStrArr(
  R.pluck("ru", sourceArr),
);

export const mta_translateBackground = makeTranslateFunction(sourceArr);
