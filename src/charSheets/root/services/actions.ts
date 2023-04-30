import { CharSheet, PresetName } from "../domain";
import { mutateObj } from "../../../lib/miscUtils";
import { CombinedRootService } from "../application/ports";

import { ServiceToActions } from "./types";

export const rootActions: ServiceToActions<CombinedRootService> = {
  setCharSheet(state: CharSheet, [newState]: [CharSheet]): CharSheet {
    return {
      ...newState,
    };
  },

  setPreset(state: CharSheet, [preset]: [PresetName]): CharSheet {
    return mutateObj(state, "preset", preset);
  },
};
