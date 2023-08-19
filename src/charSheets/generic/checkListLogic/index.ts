import * as R from "ramda";

import {
  Abilities,
  AbilitiesConfig,
  AbilitiesExtension,
  Attributes,
  AttributesConfig,
  Backgrounds,
  Virtues,
} from "../../root/domain";

import {
  CheckArrResult,
  checkArrSumFilled,
  CheckNumberResult,
} from "./generic";

export const EXPECTED_ABILITY_DOTS = [13, 9, 5] as const;
export const ABILITY_LIMIT = 3;
export const EXPECTED_ATTRIBUTE_DOTS = [7, 5, 3] as const;
export const EXPECTED_BACKGROUND_DOTS = 5;
export const EXPECTED_VIRTUE_DOTS = 7;

export function checkAttributesFilled(
  attributes: Attributes,
  attributesConfig: AttributesConfig,
  expectedAttributeDots: readonly number[]
): CheckArrResult {
  const list = R.reverse(
    R.sort(
      R.subtract,
      attributesConfig.map((el) =>
        R.sum(R.props(el.items, attributes).map((el) => (el > 0 ? el - 1 : 0)))
      )
    )
  );
  // console.log('list', list)
  return {
    checked: R.equals(list, expectedAttributeDots),
    arr: list,
  };
}

/** Sums of abilities by groups are less than specified limits. */
export function checkAbilitiesFilled(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig,
  abilitiesExtension: AbilitiesExtension,
  expectedAbilityDots: readonly number[]
): CheckArrResult {
  const abilitySums = abilitiesConfig.map((el) =>
    R.sum(R.props(el.items, abilities))
  );
  const extraAbilitySums = [
    abilitiesExtension.talentValue1 + abilitiesExtension.talentValue2,
    abilitiesExtension.skillValue1 + abilitiesExtension.skillValue2,
    abilitiesExtension.knowledgeValue1 + abilitiesExtension.knowledgeValue2,
  ];
  const sum = [
    abilitySums[0] + extraAbilitySums[0],
    abilitySums[1] + extraAbilitySums[1],
    abilitySums[2] + extraAbilitySums[2],
  ];

  const list = R.reverse(R.sort(R.subtract, sum));
  // console.log('list', list)
  return {
    checked: R.equals(list, expectedAbilityDots),
    arr: list,
  };
}

export function checkAbilitiesDotLimit(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig,
  abilitiesExtension: AbilitiesExtension,
  abilityLimit: number
): boolean {
  const isValid = R.props(
    R.flatten(R.pluck("items", abilitiesConfig)),
    abilities
  ).every((el) => el <= abilityLimit);
  const isValidExtra = R.props(
    [
      "talentValue1",
      "talentValue2",
      "skillValue1",
      "skillValue2",
      "knowledgeValue1",
      "knowledgeValue2",
    ],
    abilitiesExtension
  ).every((el) => (el as number) <= abilityLimit);

  return isValid && isValidExtra;
}

export function checkBackgrounds(
  backgrounds: Backgrounds,
  expectedBackgroundDots: number
): CheckNumberResult {
  return checkArrSumFilled(
    R.pluck("value", backgrounds),
    expectedBackgroundDots
  );
}

export function checkVirtues(virtues: Virtues): CheckNumberResult {
  return checkArrSumFilled([...R.values(virtues), -3], EXPECTED_VIRTUE_DOTS);
}
