import * as R from "ramda";

import {
  kithGroupsSource,
  kithainSource,
  nunnehiSource,
  thallainSource,
} from "./kithsSource";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  generateIdEnRuEntities,
  sortStrArr,
  IdEnRuEntity,
} from "../../../generic/dropdownContent";

type KithsGroups = "kithain" | "thallain" | "nunnehi";

const kithainArr = [
  ...generateEnRuEntities(generateSequence(2, kithainSource)),
];
const thallainArr = [
  ...generateEnRuEntities(generateSequence(2, nunnehiSource)),
];
const nunnehiArr = [
  ...generateEnRuEntities(generateSequence(2, thallainSource)),
];

const allKiths = [...kithainArr, ...thallainArr, ...nunnehiArr];

export const translateKith = makeTranslateFunction(allKiths);

const kithGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, kithGroupsSource)),
];

const groupNames = R.indexBy(R.prop("id"), kithGroupsArr) as Record<
  KithsGroups,
  IdEnRuEntity
>;

export const kiths_en = [
  {
    groupName: groupNames["kithain"].en,
    arr: sortStrArr(R.pluck("en", kithainArr)),
  },
  {
    groupName: groupNames["thallain"].en,
    arr: sortStrArr(R.pluck("en", thallainArr)),
  },
  {
    groupName: groupNames["nunnehi"].en,
    arr: sortStrArr(R.pluck("en", nunnehiArr)),
  },
];

export const kiths_ru = [
  {
    groupName: groupNames["kithain"].ru,
    arr: sortStrArr(R.pluck("ru", kithainArr)),
  },
  {
    groupName: groupNames["thallain"].ru,
    arr: sortStrArr(R.pluck("ru", thallainArr)),
  },
  {
    groupName: groupNames["nunnehi"].ru,
    arr: sortStrArr(R.pluck("ru", nunnehiArr)),
  },
];
