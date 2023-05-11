import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

import { backgroundsSource } from "./backgroundsSource";

export const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, backgroundsSource)),
];

export const v20_backgrounds_en: string[] = sortStrArr(
  R.pluck("en", sourceArr)
);

export const v20_backgrounds_ru: string[] = sortStrArr(
  R.pluck("ru", sourceArr)
);

export const v20_translateBackground = makeTranslateFunction(sourceArr);
