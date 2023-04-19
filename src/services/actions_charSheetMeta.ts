import { CharSheet, CharsheetBackMode, Preset } from "../domain";
import { mutateObj } from "./typesAndUtils";

export const charSheetMetaActions = {
  setCharSheet(state: CharSheet, [newState]: [CharSheet]): CharSheet {
    return {
      ...newState,
    };
  },

  setPresetValue(state: CharSheet, [preset]: [Preset]): CharSheet {
    return mutateObj(state, "preset", preset);
  },

  setBackgroundColor(state: CharSheet, [backgroundColor]: [string]): CharSheet {
    return mutateObj(
      state,
      "settings",
      mutateObj(state.settings, "backgroundColor", backgroundColor)
    );
  },
  setCharsheetBackColor(
    state: CharSheet,
    [charsheetBackColor]: [string]
  ): CharSheet {
    return mutateObj(
      state,
      "settings",
      mutateObj(state.settings, "charsheetBackColor", charsheetBackColor)
    );
  },
  setCharsheetBackImage(
    state: CharSheet,
    [charsheetBackImage_v2]: [string]
  ): CharSheet {
    return mutateObj(
      state,
      "settings",
      mutateObj(state.settings, "charsheetBackImage_v2", charsheetBackImage_v2)
    );
  },
  setCharsheetBackMode(
    state: CharSheet,
    [charsheetBackMode]: [CharsheetBackMode]
  ): CharSheet {
    return mutateObj(
      state,
      "settings",
      mutateObj(state.settings, "charsheetBackMode", charsheetBackMode)
    );
  },
};
