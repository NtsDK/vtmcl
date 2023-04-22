import * as R from "ramda";

import { backgroundsSource } from "./backgroundsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, backgroundsSource)),
];

export const c20_backgrounds_en: string[] = sortStrArr(
  R.pluck("en", sourceArr)
);

export const c20_backgrounds_ru: string[] = sortStrArr(
  R.pluck("ru", sourceArr)
);

export const c20_translateBackground = makeTranslateFunction(sourceArr);
