import * as R from "ramda";

import { CharSheet, FreebiePointItem } from "../../../domain";
import {
  sumAttributes,
  attributesConfig,
  sumAbilities,
  sumBackgrounds,
  willpowerRating,
} from "../../commons/presetSettings";

import { abilitiesConfig } from "./abilitiesConfig";

function humanity(charSheet: CharSheet): number {
  return charSheet.state.humanity;
}
function sumVirtues(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.virtues));
}

function sumDisciplines(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.disciplines));
}

export const freebiePointsConfig: FreebiePointItem[] = [
  {
    name: "attribute",
    extractor: sumAttributes(attributesConfig),
    multiplier: 5,
  },
  {
    name: "ability",
    extractor: sumAbilities(abilitiesConfig),
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
