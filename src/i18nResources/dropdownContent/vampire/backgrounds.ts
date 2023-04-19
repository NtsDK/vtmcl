import * as R from "ramda";

import { backgroundsSource } from "./backgroundsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../utils";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, backgroundsSource)),
];

export const v20_backgrounds_en: string[] = sortStrArr(
  R.pluck("en", sourceArr)
);

export const v20_backgrounds_ru: string[] = sortStrArr(
  R.pluck("ru", sourceArr)
);

export const v20_translateBackground = makeTranslateFunction(sourceArr);
