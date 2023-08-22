import * as R from "ramda";

import { Virtues } from "../../generic/domain";
import { Disciplines, VtMState } from "../domain";
import {
  CheckNumberResult,
  checkArrSumFilled,
} from "../../generic/checkListLogic/generic";

export const EXPECTED_DISCIPLINE_DOTS = 3;
export const INITIAL_BLOODPOOL_MAX_LIMIT = 10;

export function checkHumanity(state: VtMState, virtues: Virtues): boolean {
  return state.humanity === virtues.conscience + virtues.self_control;
}

export function checkVampireWillpower(
  state: VtMState,
  virtues: Virtues
): boolean {
  return state.willpowerRating === virtues.courage;
}

export function checkDisciplines(
  disciplines: Disciplines,
  expectedDisciplineDots: number
): CheckNumberResult {
  return checkArrSumFilled(
    R.pluck("value", disciplines),
    expectedDisciplineDots
  );
}

export function checkBloodpool(state: VtMState): boolean {
  return state.bloodpool > 0 && state.bloodpool <= INITIAL_BLOODPOOL_MAX_LIMIT;
}
