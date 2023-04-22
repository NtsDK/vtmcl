import * as R from "ramda";

import {
  legacyGroupsSource,
  nightmareSource,
  seelieSource,
  unseelieSource,
} from "./legaciesSource";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  generateIdEnRuEntities,
  sortStrArr,
  IdEnRuEntity,
} from "../../../generic/dropdownContent";

type LegacyGroups = "seelie" | "unseelie" | "nightmare";

const seelieArr = [...generateEnRuEntities(generateSequence(2, seelieSource))];
const unseelieArr = [
  ...generateEnRuEntities(generateSequence(2, unseelieSource)),
];
const nightmareArr = [
  ...generateEnRuEntities(generateSequence(2, nightmareSource)),
];

const allLegacies = [...seelieArr, ...unseelieArr, ...nightmareArr];

export const translateLegacy = makeTranslateFunction(allLegacies);

const legacyGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, legacyGroupsSource)),
];

const groupNames = R.indexBy(R.prop("id"), legacyGroupsArr) as Record<
  LegacyGroups,
  IdEnRuEntity
>;

export const legacies_en = [
  {
    groupName: groupNames["seelie"].en,
    arr: sortStrArr(R.pluck("en", seelieArr)),
  },
  {
    groupName: groupNames["unseelie"].en,
    arr: sortStrArr(R.pluck("en", unseelieArr)),
  },
  {
    groupName: groupNames["nightmare"].en,
    arr: sortStrArr(R.pluck("en", nightmareArr)),
  },
];

export const legacies_ru = [
  {
    groupName: groupNames["seelie"].ru,
    arr: sortStrArr(R.pluck("ru", seelieArr)),
  },
  {
    groupName: groupNames["unseelie"].ru,
    arr: sortStrArr(R.pluck("ru", unseelieArr)),
  },
  {
    groupName: groupNames["nightmare"].ru,
    arr: sortStrArr(R.pluck("ru", nightmareArr)),
  },
];
