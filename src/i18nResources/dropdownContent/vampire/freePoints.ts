import * as R from "ramda";

import { freePointsSource } from "./freePointsSource";
import { generateEnRuEntities, generateSequence } from "../utils";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, freePointsSource)),
];

export const v20_freePoints_en: string[] = R.pluck("en", sourceArr);

export const v20_freePoints_ru: string[] = R.pluck("ru", sourceArr);

// console.log(personalityArchetypes_en, personalityArchetypes_ru, enRuIndex, ruEnIndex);
