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
import { humanity, sumVirtues } from "../../vtm/presetSettings/freebiePoints";

import { abilitiesConfig } from "./abilitiesConfig";

function sumNuminas(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.numinaAndOtherTraits));
}

export const freebiePointsConfig: FreebiePointsConfig = {
  initialPoints: 21,
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
      name: "numina",
      extractor: sumNuminas,
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
  ],
};
