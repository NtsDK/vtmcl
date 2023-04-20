import { usePreset } from "../services/storageAdapter";
import { PresetSettings } from "../domain";

import { VtM } from "./vtm";
import { CtD } from "./ctd";
import { attributesConfig } from "./commons/presetSettings";

type PresetInfo = {
  CharSheet(props: {}): JSX.Element;
  CheckList(props: {}): JSX.Element;
};

export function usePresetInfo(): PresetInfo {
  const { preset } = usePreset();

  switch (preset) {
    case "changeling_v20": {
      return {
        CharSheet: VtM.CharSheet,
        CheckList: VtM.CheckList,
      };
    }
    case "vampire_v20": {
      return {
        CharSheet: CtD.CharSheet,
        CheckList: CtD.CheckList,
      };
    }
  }
}

export function usePresetSettings(): PresetSettings {
  const { preset } = usePreset();

  return preset === "vampire_v20"
    ? {
        profileConfig: VtM.profileConfig,
        attributesConfig,
        abilitiesConfig: VtM.abilitiesConfig,
        freePointsConfig: VtM.freePointsConfig,
      }
    : {
        profileConfig: CtD.profileConfig,
        attributesConfig,
        abilitiesConfig: CtD.abilitiesConfig,
        freePointsConfig: CtD.freePointsConfig,
      };
}
