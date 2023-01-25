import * as R from 'ramda';
import {
  Abilities,
  AbilitiesConfig,
  Attributes,
  AttributesConfig,
  Backgrounds
} from '../domain';
import {
  CheckArrResult,
  checkArrSumFilled,
  CheckNumberResult
} from './characterCheckGeneric';

export const EXPECTED_ABILITY_DOTS = [13,9,5];
export const ABILITY_LIMIT = 3;
export const EXPECTED_ATTRIBUTE_DOTS = [7,5,3];
export const EXPECTED_BACKGROUND_DOTS = 5;

export function checkAbilitiesFilled(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig
): CheckArrResult {
  const list = R.reverse(R.sort(R.subtract,
    abilitiesConfig.map(el => R.sum(R.props(el.items, abilities)))
  ));
  // console.log('list', list)
  return {
    checked: R.equals(list, EXPECTED_ABILITY_DOTS),
    arr: list
  };
}

export function checkAbilitiesDotLimit(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig
): boolean {
  const arr = R.props(
    R.flatten(R.pluck('items', abilitiesConfig)),
    abilities
  ).filter(el => el > ABILITY_LIMIT);
  return arr.length === 0;
}

export function checkAttributesFilled(
  attributes: Attributes,
  attributesConfig: AttributesConfig
): CheckArrResult {
  const list = R.reverse(R.sort(R.subtract,
    attributesConfig.map(el => R.sum(R.props(el.items, attributes).map(el => el > 0 ? el - 1 : 0)))
  ));
  // console.log('list', list)
  return {
    checked: R.equals(list, EXPECTED_ATTRIBUTE_DOTS),
    arr: list
  };
}

export function checkBackgrounds(backgrounds: Backgrounds): CheckNumberResult {
  return checkArrSumFilled(R.pluck('value', backgrounds), EXPECTED_BACKGROUND_DOTS);
}
