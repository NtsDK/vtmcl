import * as R from "ramda";

import { applyRange, mutateObj } from "../../../lib/miscUtils";
import { CharSheet } from "../../root/domain";
import { getLimits, ServiceToActions } from "../../root/services/public";
import { CombinedVtMService } from "../application/ports";

export const vtmActions: ServiceToActions<CombinedVtMService> = {
  addDiscipline(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "disciplines",
      R.append({ name: "", value: 0 }, state.disciplines)
    );
  },
  removeDiscipline(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(
      state,
      "disciplines",
      R.remove(index, 1, state.disciplines)
    );
  },
  setDisciplineName(
    state: CharSheet,
    [index, name]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "disciplines",
      R.update(
        index,
        {
          ...state.disciplines[index],
          name,
        },
        state.disciplines
      )
    );
  },
  setDisciplineValue(
    state: CharSheet,
    [index, value]: [number, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "disciplines",
      R.update(
        index,
        {
          ...state.disciplines[index],
          value: applyRange(0, limits.parameterLimit, value),
        },
        state.disciplines
      )
    );
  },

  addDisciplinePath(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "disciplinePaths",
      R.append({ name: "", value: 0 }, state.disciplinePaths)
    );
  },
  removeDisciplinePath(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(
      state,
      "disciplinePaths",
      R.remove(index, 1, state.disciplinePaths)
    );
  },
  setDisciplinePathName(
    state: CharSheet,
    [index, name]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "disciplinePaths",
      R.update(
        index,
        {
          ...state.disciplinePaths[index],
          name,
        },
        state.disciplinePaths
      )
    );
  },
  setDisciplinePathValue(
    state: CharSheet,
    [index, value]: [number, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "disciplinePaths",
      R.update(
        index,
        {
          ...state.disciplinePaths[index],
          value: applyRange(0, limits.parameterLimit, value),
        },
        state.disciplinePaths
      )
    );
  },

  addRitual(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "rituals",
      R.append({ name: "", level: "" }, state.rituals)
    );
  },
  removeRitual(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(state, "rituals", R.remove(index, 1, state.rituals));
  },
  setRitualName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return mutateObj(
      state,
      "rituals",
      R.update(
        index,
        {
          ...state.rituals[index],
          name,
        },
        state.rituals
      )
    );
  },
  setRitualLevel(
    state: CharSheet,
    [index, level]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "rituals",
      R.update(
        index,
        {
          ...state.rituals[index],
          level,
        },
        state.rituals
      )
    );
  },
};
