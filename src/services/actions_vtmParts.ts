import { CharSheet, Virtues } from "../domain";
import { getLimits } from "../i18nResources/getLimits";
import { applyRange } from "./typesAndUtils";

export const vtmPartActions = {
  setVirtue(state: CharSheet, [virtueName, value]: [keyof Virtues, number]): CharSheet {
    return {
      ...state,
      virtues: {
        ...state.virtues,
        [virtueName]: applyRange(1, 5, value)
      }
    };
  },

  addDiscipline(state: CharSheet): CharSheet {
    return {
      ...state,
      disciplines: [...state.disciplines, { name: '', value: 0 }]
    };
  },
  removeDiscipline(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      disciplines: state.disciplines.filter((el, index2) => index2 !== index)
    };
  },
  setDisciplineName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      disciplines: state.disciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setDisciplineValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      disciplines: state.disciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addDisciplinePath(state: CharSheet): CharSheet {
    return {
      ...state,
      disciplinePaths: [...state.disciplinePaths, { name: '', value: 0 }]
    };
  },
  removeDisciplinePath(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.filter((el, index2) => index2 !== index)
    };
  },
  setDisciplinePathName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setDisciplinePathValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addRitual(state: CharSheet): CharSheet {
    return {
      ...state,
      rituals: [...state.rituals, { name: '', level: '' }]
    };
  },
  removeRitual(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.filter((el, index2) => index2 !== index)
    };
  },
  setRitualName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setRitualLevel(state: CharSheet, [index, level]: [number, string]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          level
        };
      })
    };
  },

}
