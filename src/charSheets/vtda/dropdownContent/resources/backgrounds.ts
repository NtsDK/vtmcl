import * as R from "ramda";

import {
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { sourceArr as sourceArr1 } from "../../../vtm/dropdownContent/resources/backgrounds";

import { removeBackgrounds } from "./backgroundsSource";

export const sourceArr = sourceArr1.filter(
  (el) =>
    !removeBackgrounds.includes(el.en) && !removeBackgrounds.includes(el.ru)
);

export const backgrounds_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const backgrounds_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateBackground = makeTranslateFunction(sourceArr);
