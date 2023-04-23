import * as R from "ramda";
import { useStore } from "../../root/services/store";
import {
  VirtuesService,
  DisciplinesService,
  DisciplinePathsService,
  RitualsService,
} from "../application/ports";

export function useVirtues(): VirtuesService {
  return R.pick(["virtues", "setVirtue"], useStore());
}

export function useDisciplines(): DisciplinesService {
  return R.pick(
    [
      "disciplines",
      "addDiscipline",
      "removeDiscipline",
      "setDisciplineName",
      "setDisciplineValue",
    ],
    useStore()
  );
}
export function useDisciplinePaths(): DisciplinePathsService {
  return R.pick(
    [
      "disciplinePaths",
      "addDisciplinePath",
      "removeDisciplinePath",
      "setDisciplinePathName",
      "setDisciplinePathValue",
    ],
    useStore()
  );
}
export function useRituals(): RitualsService {
  return R.pick(
    ["rituals", "addRitual", "setRitualName", "setRitualLevel", "removeRitual"],
    useStore()
  );
}
