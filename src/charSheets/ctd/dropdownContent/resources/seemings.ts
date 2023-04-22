import * as R from "ramda";

import { seemingsSource } from "./seemingsSource";
import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
} from "../../../generic/dropdownContent";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, seemingsSource)),
];

export const seemings_en: string[] = R.pluck("en", sourceArr);

export const seemings_ru: string[] = R.pluck("ru", sourceArr);

export const translateSeeming = makeTranslateFunction(sourceArr);
