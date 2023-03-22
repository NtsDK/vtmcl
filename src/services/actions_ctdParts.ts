import * as R from 'ramda';
import { CharSheet, Health, Realms } from "../domain";
import { getLimits } from "../i18nResources/getLimits";
import { applyRange, mutateObj } from "./typesAndUtils";

export const ctdPartActions = {
  setRealm(state: CharSheet, [realmName, value]: [keyof Realms, number]): CharSheet {
    return mutateObj(state, 'realms',
      mutateObj(state.realms, realmName, value)
    );
  },
  setHealthChimerical(state: CharSheet, [healthName, value]: [keyof Health, number]): CharSheet {
    return mutateObj(state, 'healthChimerical',
      mutateObj(state.healthChimerical, healthName, applyRange(0, 3, value))
    );
  },

  addArt(state: CharSheet): CharSheet {
    return mutateObj(state, 'arts',
      R.append({ name: '', value: 0 }, state.arts)
    );
  },
  removeArt(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(state, 'arts',
      R.remove(index, 1, state.arts)
    );
  },
  setArtName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return mutateObj(state, 'arts',
      R.update(index, {
        ...state.arts[index],
        name
      }, state.arts)
    );
  },
  setArtValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return mutateObj(state, 'arts',
      R.update(index, {
        ...state.arts[index],
        value: applyRange(0, limits.parameterLimit, value)
      }, state.arts)
    );
  },
}
