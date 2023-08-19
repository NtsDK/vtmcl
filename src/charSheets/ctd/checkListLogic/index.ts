import * as R from "ramda";

import { Arts, Realms, CtDState } from "../domain";
import {
  CheckNumberResult,
  checkArrSumFilled,
} from "../../generic/checkListLogic/generic";

export const EXPECTED_ART_DOTS = 3;
export const EXPECTED_BANALITY_DOTS = 3;
export const EXPECTED_GLAMOUR_DOTS = 4;
export const EXPECTED_REALM_DOTS = 5;
export const EXPECTED_WILLPOWER_DOTS = 4;

export function checkArts(arts: Arts): CheckNumberResult {
  return checkArrSumFilled(R.pluck("value", arts), EXPECTED_ART_DOTS);
}

export function checkBanality(state: CtDState): boolean {
  return state.banalityRating === EXPECTED_BANALITY_DOTS;
}

export function checkGlamour(state: CtDState): boolean {
  return state.glamourRating === EXPECTED_GLAMOUR_DOTS;
}

export function checkRealms(realms: Realms): CheckNumberResult {
  return checkArrSumFilled(R.values(realms), EXPECTED_REALM_DOTS);
}

export function checkChangelingWillpower(state: CtDState): boolean {
  return state.willpowerRating === EXPECTED_WILLPOWER_DOTS;
}
