import * as R from "ramda";

import {
  CharSheet,
  FreebiePointsConfig,
} from "../../../charSheets/root/domain";
import {
  sumAttributes,
  attributesConfig,
  sumAbilities,
  sumBackgrounds,
  willpowerRating,
} from "../../generic/presetSettings";

import { abilitiesConfig } from "./abilitiesConfig";

function sumSpheres(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.spheres));
}
export function arete(charSheet: CharSheet): number {
  return charSheet.state.arete;
}
export function quintessence(charSheet: CharSheet): number {
  return charSheet.state.quintessence;
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
      name: "spheres",
      extractor: sumSpheres,
      multiplier: 7,
    },
    {
      name: "arete",
      extractor: arete,
      multiplier: 4,
    },
    {
      name: "willpower",
      extractor: willpowerRating,
      multiplier: 1,
    },
    {
      name: "quintessence",
      extractor: quintessence,
      multiplier: 1,
    },
  ],
};
