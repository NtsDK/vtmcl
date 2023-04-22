import * as R from "ramda";

import { artsSource } from "./artsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

const sourceArr = [...generateEnRuEntities(generateSequence(2, artsSource))];

export const arts_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const arts_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateArt = makeTranslateFunction(sourceArr);
