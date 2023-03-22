import { CharSheet, Health, Realms } from "../domain";
import { getLimits } from "../i18nResources/getLimits";
import { applyRange } from "./typesAndUtils";

export const ctdPartActions = {
  setRealm(state: CharSheet, [realmName, value]: [keyof Realms, number]): CharSheet {
    return {
      ...state,
      realms: {
        ...state.realms,
        [realmName]: applyRange(1, 5, value)
      }
    };
  },
  setHealthChimerical(state: CharSheet, [healthName, value]: [keyof Health, number]): CharSheet {
    return {
      ...state,
      healthChimerical: {
        ...state.healthChimerical,
        [healthName]: applyRange(0, 3, value)
      }
    };
  },

  addArt(state: CharSheet): CharSheet {
    return {
      ...state,
      arts: [...state.arts, { name: '', value: 0 }]
    };
  },
  removeArt(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      arts: state.arts.filter((el, index2) => index2 !== index)
    };
  },
  setArtName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      arts: state.arts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setArtValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      arts: state.arts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },
}
