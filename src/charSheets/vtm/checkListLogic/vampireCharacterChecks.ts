import * as R from "ramda";

import { CheckNumberResult, checkArrSumFilled } from "../../commons";
import { Disciplines, State, Virtues } from "../../../domain";

export const EXPECTED_VIRTUE_DOTS = 7;
export const EXPECTED_DISCIPLINE_DOTS = 3;
export const INITIAL_BLOODPOOL_MAX_LIMIT = 10;

export function checkVirtues(virtues: Virtues): CheckNumberResult {
  return checkArrSumFilled([...R.values(virtues), -3], EXPECTED_VIRTUE_DOTS);
}

export function checkHumanity(state: State, virtues: Virtues): boolean {
  return state.humanity === virtues.conscience + virtues.self_control;
}

export function checkVampireWillpower(state: State, virtues: Virtues): boolean {
  return state.willpowerRating === virtues.courage;
}

export function checkDisciplines(disciplines: Disciplines): CheckNumberResult {
  return checkArrSumFilled(
    R.pluck("value", disciplines),
    EXPECTED_DISCIPLINE_DOTS
  );
}

export function checkBloodpool(state: State): boolean {
  return state.bloodpool > 0 && state.bloodpool <= INITIAL_BLOODPOOL_MAX_LIMIT;
}