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

export function road(charSheet: CharSheet): number {
  return charSheet.state.roadValue;
}
export function sumVirtues(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.virtues));
}

function sumDisciplines(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.disciplines));
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
      name: "road",
      extractor: road,
      multiplier: 2,
    },
    {
      name: "willpower",
      extractor: willpowerRating,
      multiplier: 1,
    },
  ],
};
