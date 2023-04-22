import * as R from "ramda";

import {
  meritsAndFlawsGroupsSource,
  mentalFlawsSource,
  mentalMeritsSource,
  physicalFlawsSource,
  physicalMeritsSource,
  socialFlawsSource,
  socialMeritsSource,
  supernaturalFlawsSource,
  supernaturalMeritsSource,
} from "./meritsAndFlawsSource";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  generateIdEnRuEntities,
  sortStrArr,
  IdEnRuEntity,
} from "../../../generic/dropdownContent";

type MeritsAndFlawsGroups =
  | "physical-merits"
  | "physical-flaws"
  | "mental-merits"
  | "mental-flaws"
  | "social-merits"
  | "social-flaws"
  | "supernatural-merits"
  | "supernatural-flaws";

const mentalFlawsArr = [
  ...generateEnRuEntities(generateSequence(2, mentalFlawsSource)),
];
const mentalMeritsArr = [
  ...generateEnRuEntities(generateSequence(2, mentalMeritsSource)),
];
const physicalFlawsArr = [
  ...generateEnRuEntities(generateSequence(2, physicalFlawsSource)),
];
const physicalMeritsArr = [
  ...generateEnRuEntities(generateSequence(2, physicalMeritsSource)),
];
const socialFlawsArr = [
  ...generateEnRuEntities(generateSequence(2, socialFlawsSource)),
];
const socialMeritsArr = [
  ...generateEnRuEntities(generateSequence(2, socialMeritsSource)),
];
const supernaturalFlawsArr = [
  ...generateEnRuEntities(generateSequence(2, supernaturalFlawsSource)),
];
const supernaturalMeritsArr = [
  ...generateEnRuEntities(generateSequence(2, supernaturalMeritsSource)),
];

const allMeritsAndFlaws = [
  ...mentalFlawsArr,
  ...mentalMeritsArr,
  ...physicalFlawsArr,
  ...physicalMeritsArr,
  ...socialFlawsArr,
  ...socialMeritsArr,
  ...supernaturalFlawsArr,
  ...supernaturalMeritsArr,
];

export const c20_translateMeritsAndFlaws =
  makeTranslateFunction(allMeritsAndFlaws);

const meritsAndFlawsGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, meritsAndFlawsGroupsSource)),
];

const groupNames = R.indexBy(R.prop("id"), meritsAndFlawsGroupsArr) as Record<
  MeritsAndFlawsGroups,
  IdEnRuEntity
>;

export const c20_merits_en = [
  {
    groupName: groupNames["physical-merits"].en,
    arr: sortStrArr(R.pluck("en", physicalMeritsArr)),
  },
  {
    groupName: groupNames["mental-merits"].en,
    arr: sortStrArr(R.pluck("en", mentalMeritsArr)),
  },
  {
    groupName: groupNames["social-merits"].en,
    arr: sortStrArr(R.pluck("en", socialMeritsArr)),
  },
  {
    groupName: groupNames["supernatural-merits"].en,
    arr: sortStrArr(R.pluck("en", supernaturalMeritsArr)),
  },
];

export const c20_merits_ru = [
  {
    groupName: groupNames["physical-merits"].ru,
    arr: sortStrArr(R.pluck("ru", physicalMeritsArr)),
  },
  {
    groupName: groupNames["mental-merits"].ru,
    arr: sortStrArr(R.pluck("ru", mentalMeritsArr)),
  },
  {
    groupName: groupNames["social-merits"].ru,
    arr: sortStrArr(R.pluck("ru", socialMeritsArr)),
  },
  {
    groupName: groupNames["supernatural-merits"].ru,
    arr: sortStrArr(R.pluck("ru", supernaturalMeritsArr)),
  },
];

export const c20_flaws_en = [
  {
    groupName: groupNames["physical-flaws"].en,
    arr: sortStrArr(R.pluck("en", physicalFlawsArr)),
  },
  {
    groupName: groupNames["mental-flaws"].en,
    arr: sortStrArr(R.pluck("en", mentalFlawsArr)),
  },
  {
    groupName: groupNames["social-flaws"].en,
    arr: sortStrArr(R.pluck("en", socialFlawsArr)),
  },
  {
    groupName: groupNames["supernatural-flaws"].en,
    arr: sortStrArr(R.pluck("en", supernaturalFlawsArr)),
  },
];

export const c20_flaws_ru = [
  {
    groupName: groupNames["physical-flaws"].ru,
    arr: sortStrArr(R.pluck("ru", physicalFlawsArr)),
  },
  {
    groupName: groupNames["mental-flaws"].ru,
    arr: sortStrArr(R.pluck("ru", mentalFlawsArr)),
  },
  {
    groupName: groupNames["social-flaws"].ru,
    arr: sortStrArr(R.pluck("ru", socialFlawsArr)),
  },
  {
    groupName: groupNames["supernatural-flaws"].ru,
    arr: sortStrArr(R.pluck("ru", supernaturalFlawsArr)),
  },
];
