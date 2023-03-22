import { CharSheet, CharsheetBackMode, Preset } from "../domain";

export const charSheetMetaActions = {
  setCharSheet(state: CharSheet, [newState]: [CharSheet]): CharSheet {
    return {
      ...newState,
    };
  },

  setPresetValue(state: CharSheet, [preset]: [Preset]): CharSheet {
    return {
      ...state,
      preset,
    };
  },

  setBackgroundColor(state: CharSheet, [backgroundColor]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        backgroundColor
      }
    };
  },
  setCharsheetBackColor(state: CharSheet, [charsheetBackColor]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackColor
      }
    };
  },
  setCharsheetBackImage(state: CharSheet, [charsheetBackImage_v2]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackImage_v2
      }
    };
  },
  setCharsheetBackMode(state: CharSheet, [charsheetBackMode]: [CharsheetBackMode]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackMode
      }
    };
  },

}
