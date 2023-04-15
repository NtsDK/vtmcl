import * as R from "ramda";

import { CharSheet, FreePointItem } from "../../domain";
import { attributesConfig } from "./attributesConfig";
import {
  sumAbilities,
  sumAttributes,
  sumBackgrounds,
  willpowerRating,
} from "./freePointCommons";

import { changelingAbilitiesConfig } from "./changelingAbilitiesConfig";

function glamour(charSheet: CharSheet): number {
  return charSheet.state.glamourRating;
}
function sumArts(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.arts));
}
function sumRealms(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.realms));
}

export const changelingFreePointsConfig: FreePointItem[] = [
  {
    name: "attribute",
    extractor: sumAttributes(attributesConfig),
    multiplier: 5,
  },
  {
    name: "ability",
    extractor: sumAbilities(changelingAbilitiesConfig),
    multiplier: 2,
  },
  {
    name: "background",
    extractor: sumBackgrounds,
    multiplier: 1,
  },
  {
    name: "art",
    extractor: sumArts,
    multiplier: 5,
  },
  {
    name: "realm",
    extractor: sumRealms,
    multiplier: 2,
  },
  {
    name: "glamour",
    extractor: glamour,
    multiplier: 3,
  },
  {
    name: "willpower",
    extractor: willpowerRating,
    multiplier: 1,
  },
];
