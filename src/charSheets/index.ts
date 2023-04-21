import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePreset } from "../services/storageAdapter";
import { PresetSettings } from "../domain";
import { useStore } from "../services/store";

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
    case "vampire_v20": {
      return {
        CharSheet: VtM.CharSheet,
        CheckList: VtM.CheckList,
      };
    }
    case "changeling_v20": {
      return {
        CharSheet: CtD.CharSheet,
        CheckList: CtD.CheckList,
      };
    }
  }
}

export function useCharsheetContentI18n(): void {
  const { i18n } = useTranslation();
  const store = useStore();
  const { preset } = usePreset();

  const [prevLanguage, setPrevLanguage] = useState(i18n.language);

  useEffect(() => {
    const cb = (lng: string): void => {
      setPrevLanguage(lng);

      if (prevLanguage === lng) {
        return;
      }

      if (preset === "vampire_v20") {
        VtM.translateVtMCharsheetContentI18n(store, prevLanguage, lng);
      } else {
        CtD.translateCtDCharsheetContentI18n(store, prevLanguage, lng);
      }
    };

    i18n.on("languageChanged", cb);
    return () => {
      i18n.off("languageChanged", cb);
    };
  }, [i18n, preset, prevLanguage, store]);
}

export function usePresetSettings(): PresetSettings {
  const { preset } = usePreset();

  const vtmResource = VtM.useVtMResource();
  const ctdResource = CtD.useCtDResource();

  return preset === "vampire_v20"
    ? {
        profileConfig: VtM.profileConfig,
        attributesConfig,
        abilitiesConfig: VtM.abilitiesConfig,
        freePointsConfig: VtM.freePointsConfig,
        resources: vtmResource as unknown as PresetSettings["resources"],
      }
    : {
        profileConfig: CtD.profileConfig,
        attributesConfig,
        abilitiesConfig: CtD.abilitiesConfig,
        freePointsConfig: CtD.freePointsConfig,
        resources: ctdResource as unknown as PresetSettings["resources"],
      };
}
