import * as R from "ramda";

import { courtsSource } from "./courtsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
} from "../../../generic/dropdownContent";

const sourceArr = [...generateEnRuEntities(generateSequence(2, courtsSource))];

export const courts_en: string[] = R.pluck("en", sourceArr);

export const courts_ru: string[] = R.pluck("ru", sourceArr);

export const translateCourt = makeTranslateFunction(sourceArr);
