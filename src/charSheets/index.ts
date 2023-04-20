import { usePreset } from "../services/storageAdapter";

import { VtMCharSheet, VtMCheckList } from "./vtm";
import { CtDCharSheet, CtDCheckList } from "./ctd";

type PresetInfo = {
  CharSheet(props: {}): JSX.Element;
  CheckList(props: {}): JSX.Element;
};

export function usePresetInfo(): PresetInfo {
  const { preset } = usePreset();

  switch (preset) {
    case "changeling_v20": {
      return {
        CharSheet: VtMCharSheet,
        CheckList: VtMCheckList,
      };
    }
    case "vampire_v20": {
      return {
        CharSheet: CtDCharSheet,
        CheckList: CtDCheckList,
      };
    }
  }
}
