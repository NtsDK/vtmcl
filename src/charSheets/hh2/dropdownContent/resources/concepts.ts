import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import { OptionGroup } from "../../../root/domain";
import {
  concepts_en as v20_concepts_en,
  concepts_ru as v20_concepts_ru,
  sourceArr as v20_sourceArr,
} from "../../../vtm/dropdownContent/resources/concepts";

import { conceptsSource } from "./conceptsSource";

const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, conceptsSource)),
];

const concepts_en: string[] = sortStrArr(R.pluck("en", sourceArr));

const concepts_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const conceptGroups_en: OptionGroup[] = [
  {
    groupName: "Hunters Hunted II",
    arr: concepts_en,
  },
  {
    groupName: "Vampire: The Masquerade",
    arr: v20_concepts_en,
  },
];

export const conceptGroups_ru: OptionGroup[] = [
  {
    groupName: "Охота на охотников II",
    arr: concepts_ru,
  },
  {
    groupName: "Вампиры: Маскарад",
    arr: v20_concepts_ru,
  },
];

export const translateConcept = makeTranslateFunction([
  ...sourceArr,
  ...v20_sourceArr,
]);
