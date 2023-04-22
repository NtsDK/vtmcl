import * as R from "ramda";

import {
  AbilitiesConfig,
  AttributesConfig,
  CharSheet,
} from "../../root/domain";

export function willpowerRating(charSheet: CharSheet): number {
  return charSheet.state.willpowerRating;
}

export function sumBackgrounds(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.backgrounds));
}

export function sumAbilities(
  abilitiesConfig: AbilitiesConfig
): (charSheet: CharSheet) => number {
  return function (charSheet: CharSheet): number {
    const mainSum = R.sum(
      R.flatten(
        abilitiesConfig.map((el) => R.props(el.items, charSheet.abilities))
      )
    );
    const { abilitiesExtension } = charSheet;
    const extraSum =
      abilitiesExtension.knowledgeValue1 +
      abilitiesExtension.knowledgeValue2 +
      abilitiesExtension.skillValue1 +
      abilitiesExtension.skillValue2 +
      abilitiesExtension.talentValue1 +
      abilitiesExtension.talentValue2;
    return mainSum + extraSum;
  };
}

export function sumAttributes(
  attributesConfig: AttributesConfig
): (charSheet: CharSheet) => number {
  return function (charSheet: CharSheet): number {
    return R.sum(
      R.flatten(
        attributesConfig.map((el) => R.props(el.items, charSheet.attributes))
      )
    );
  };
}
