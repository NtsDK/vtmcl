import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  generateIdEnRuEntities,
  sortStrArr,
  IdEnRuEntity,
  EnRuEntity,
} from "../../../generic/dropdownContent";
import {
  checkNumberEquivalence,
  allMeritsAndFlaws as vtmMeritsAndFlaws,
  v20_flaws_en,
  v20_merits_en,
  v20_flaws_ru,
  v20_merits_ru,
} from "../../../vtm/dropdownContent/resources/meritsAndFlaws";

import { hh2FlawsSource, hh2MeritsSource } from "./meritsAndFlawsSource";

const hh2FlawsArr = [
  ...generateEnRuEntities(generateSequence(2, hh2FlawsSource)),
];
const hh2MeritsArr = [
  ...generateEnRuEntities(generateSequence(2, hh2MeritsSource)),
];

const allMeritsAndFlaws = [
  ...hh2FlawsArr,
  ...hh2MeritsArr,
  ...vtmMeritsAndFlaws,
].map(checkNumberEquivalence);

export const translateMeritsAndFlaws = makeTranslateFunction(allMeritsAndFlaws);

export const merits_en = [
  {
    groupName: "Hunters Hunted II",
    arr: sortStrArr(R.pluck("en", hh2MeritsArr)),
  },
  ...v20_merits_en,
];

export const merits_ru = [
  {
    groupName: "Охота на охотников II",
    arr: sortStrArr(R.pluck("ru", hh2MeritsArr)),
  },
  ...v20_merits_ru,
];

export const flaws_en = [
  {
    groupName: "Hunters Hunted II",
    arr: sortStrArr(R.pluck("en", hh2FlawsArr)),
  },
  ...v20_flaws_en,
];

export const flaws_ru = [
  {
    groupName: "Охота на охотников II",
    arr: sortStrArr(R.pluck("ru", hh2FlawsArr)),
  },
  ...v20_flaws_ru,
];
