import { CharsheetBackMode } from "../../misc/domain";
import { mutateObj } from "../../../lib/miscUtils";
import { CombinedMiscService } from "../application/ports";
import { ServiceToActions } from "../../root/services/public";
import { CharSheet } from "../../root/domain";

export const miscActions: ServiceToActions<CombinedMiscService> = {
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
