import * as R from "ramda";

import {
  CheckNumberResult,
  checkArrSumFilled,
} from "../../generic/checkListLogic/generic";
import { MtAState, Spheres } from "../domain";

export const EXPECTED_SPHERE_DOTS = 6;
export const EXPECTED_WILLPOWER_DOTS = 5;
export const EXPECTED_ARETE_DOTS = 1;
export const EXPECTED_PARADOX_DOTS = 0;

export function checkSpheres(spheres: Spheres): CheckNumberResult {
  return checkArrSumFilled(R.values(spheres), EXPECTED_SPHERE_DOTS);
}

export function checkMageWillpower(state: MtAState): boolean {
  return state.willpowerRating === EXPECTED_WILLPOWER_DOTS;
}

export function checkArete(state: MtAState): boolean {
  return state.arete === EXPECTED_ARETE_DOTS;
}

export function checkParadox(state: MtAState): boolean {
  return state.paradox === EXPECTED_PARADOX_DOTS;
}

export function checkSpheresDotLimit(
  spheres: Spheres,
  state: MtAState
): boolean {
  return R.values(spheres).every((el) => el <= state.arete);
}
