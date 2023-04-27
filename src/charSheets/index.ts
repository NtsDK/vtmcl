import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePreset } from "../charSheets/root/services/storageAdapter";
import { useStore } from "../charSheets/root/services/store";

import { VtM } from "./vtm";
import { CtD } from "./ctd";
import { HH2 } from "./hh2";
import { attributesConfig } from "./generic/presetSettings";
import { PresetSettings } from "./root/domain";

type PresetInfo = {
  CharSheet(props: {}): JSX.Element;
  CheckList?(props: {}): JSX.Element;
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
    case "hunter_v20": {
      return {
        CharSheet: HH2.CharSheet,
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

      switch (preset) {
        case "vampire_v20":
          VtM.translateVtMCharsheetContentI18n(store, prevLanguage, lng);
          break;
        case "changeling_v20":
          CtD.translateCtDCharsheetContentI18n(store, prevLanguage, lng);
          break;
        case "hunter_v20":
          console.warn("TODO implement translation for HH2");
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

  switch (preset) {
    case "vampire_v20":
      return {
        displayName: "VtM V20",
        profileConfig: VtM.profileConfig,
        attributesConfig,
        abilitiesConfig: VtM.abilitiesConfig,
        freebiePointsConfig: VtM.freebiePointsConfig,
        resources: vtmResource as unknown as PresetSettings["resources"],
      };
    case "changeling_v20":
      return {
        displayName: "CtD V20",
        profileConfig: CtD.profileConfig,
        attributesConfig,
        abilitiesConfig: CtD.abilitiesConfig,
        freebiePointsConfig: CtD.freebiePointsConfig,
        resources: ctdResource as unknown as PresetSettings["resources"],
      };
    case "hunter_v20":
      return {
        displayName: "HH2 V20",
        profileConfig: HH2.profileConfig,
        attributesConfig,
        abilitiesConfig: HH2.abilitiesConfig,
      };
  }
}
