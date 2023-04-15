import * as R from "ramda";

import { CharSheet, FreePointItem } from "../../domain";
import { attributesConfig } from "./attributesConfig";
import {
  sumAbilities,
  sumAttributes,
  sumBackgrounds,
  willpowerRating,
} from "./freePointCommons";

import { vampireAbilitiesConfig } from "./vampireAbilitiesConfig";

function humanity(charSheet: CharSheet): number {
  return charSheet.state.humanity;
}
function sumVirtues(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.virtues));
}

function sumDisciplines(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.disciplines));
}

export const vampireFreePointsConfig: FreePointItem[] = [
  {
    name: "attribute",
    extractor: sumAttributes(attributesConfig),
    multiplier: 5,
  },
  {
    name: "ability",
    extractor: sumAbilities(vampireAbilitiesConfig),
    multiplier: 2,
  },
  {
    name: "discipline",
    extractor: sumDisciplines,
    multiplier: 7,
  },
  {
    name: "background",
    extractor: sumBackgrounds,
    multiplier: 1,
  },
  {
    name: "virtue",
    extractor: sumVirtues,
    multiplier: 2,
  },
  {
    name: "humanity",
    extractor: humanity,
    multiplier: 2,
  },
  {
    name: "willpower",
    extractor: willpowerRating,
    multiplier: 1,
  },
];
