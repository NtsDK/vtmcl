import * as R from "ramda";

import { strToNumber } from "../../../../lib/miscUtils";
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
  mentalFlawsSource,
  mentalMeritsSource,
  meritsAndFlawsGroupsSource,
  physicalFlawsSource,
  physicalMeritsSource,
  socialFlawsSource,
  socialMeritsSource,
  supernaturalFlawsSource,
  supernaturalMeritsSource,
} from "../../../vtm/dropdownContent/resources/meritsAndFlawsSource";

type MeritsAndFlawsGroups =
  | "physical-merits"
  | "physical-flaws"
  | "mental-merits"
  | "mental-flaws"
  | "social-merits"
  | "social-flaws"
  | "supernatural-merits"
  | "supernatural-flaws";

export function checkNumberEquivalence(el: EnRuEntity): EnRuEntity {
  if (strToNumber(el.en) !== strToNumber(el.ru)) {
    throw new Error(
      `Point impact is different for merit/prop: ${JSON.stringify(el)}`,
    );
  }
  return el;
}

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

export const allMeritsAndFlaws = [
  ...mentalFlawsArr,
  ...mentalMeritsArr,
  ...physicalFlawsArr,
  ...physicalMeritsArr,
  ...socialFlawsArr,
  ...socialMeritsArr,
  ...supernaturalFlawsArr,
  ...supernaturalMeritsArr,
].map(checkNumberEquivalence);

export const v20_translateMeritsAndFlaws =
  makeTranslateFunction(allMeritsAndFlaws);

const meritsAndFlawsGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, meritsAndFlawsGroupsSource)),
];

const groupNames = R.indexBy(R.prop("id"), meritsAndFlawsGroupsArr) as Record<
  MeritsAndFlawsGroups,
  IdEnRuEntity
>;

export const v20_merits_en = [
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

export const v20_merits_ru = [
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

export const v20_flaws_en = [
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

export const v20_flaws_ru = [
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
