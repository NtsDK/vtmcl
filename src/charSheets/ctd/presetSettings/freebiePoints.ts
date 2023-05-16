import * as R from "ramda";

import { CharSheet, FreebiePointsConfig } from "../../root/domain";
import {
  sumAttributes,
  attributesConfig,
  sumAbilities,
  sumBackgrounds,
  willpowerRating,
} from "../../generic/presetSettings";

import { abilitiesConfig } from "./abilitiesConfig";

function glamour(charSheet: CharSheet): number {
  return charSheet.state.glamourRating;
}
function sumArts(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.arts));
}
function sumRealms(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.realms));
}

export const freebiePointsConfig: FreebiePointsConfig = {
  initialPoints: 15,
  list: [
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
  ],
};
