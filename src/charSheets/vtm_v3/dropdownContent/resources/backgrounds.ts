import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { sourceArr as sourceArr1 } from "../../../vtm/dropdownContent/resources/backgrounds";

import {
  removeBackgrounds,
  additionalBackgroundsSource,
} from "./backgroundsSource";

export const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, additionalBackgroundsSource)),
  ...sourceArr1.filter(
    (el) =>
      !removeBackgrounds.includes(el.en) && !removeBackgrounds.includes(el.ru),
  ),
];

export const v3_backgrounds_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const v3_backgrounds_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateBackground = makeTranslateFunction(sourceArr);
