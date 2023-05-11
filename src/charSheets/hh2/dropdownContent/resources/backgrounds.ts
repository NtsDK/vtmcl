import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { OptionGroup } from "../../../root/domain";
import {
  v20_backgrounds_en,
  v20_backgrounds_ru,
  sourceArr as v20_sourceArr,
} from "../../../vtm/dropdownContent/resources/backgrounds";

import { backgroundsSource } from "./backgroundsSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, backgroundsSource)),
];

const backgrounds_en: string[] = sortStrArr(R.pluck("en", sourceArr));

const backgrounds_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const backgroundGroups_en: OptionGroup[] = [
  {
    groupName: "Hunters Hunted II",
    arr: backgrounds_en,
  },
  {
    groupName: "Vampire: The Masquerade",
    arr: v20_backgrounds_en,
  },
];

export const backgroundGroups_ru: OptionGroup[] = [
  {
    groupName: "Охота на охотников II",
    arr: backgrounds_ru,
  },
  {
    groupName: "Вампиры: Маскарад",
    arr: v20_backgrounds_ru,
  },
];

export const translateBackground = makeTranslateFunction([
  ...sourceArr,
  ...v20_sourceArr,
]);
