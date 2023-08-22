import { Virtues } from "../../generic/domain";
import { VtDAState } from "../domain";

export const EXPECTED_DISCIPLINE_DOTS = 4;

export function checkRoad(state: VtDAState, virtues: Virtues): boolean {
  return state.roadValue === virtues.conscience + virtues.self_control;
}
