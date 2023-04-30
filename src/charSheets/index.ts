import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { usePreset } from "../charSheets/root/services/storageAdapter";
import { useStore } from "../charSheets/root/services/store";

import { VtM } from "./vtm";
import { CtD } from "./ctd";
import { HH2 } from "./hh2";
import { PresetName, PresetSettings } from "./root/domain";
import { Preset } from "./types";

type PresetInfo = {
  CharSheet(props: {}): JSX.Element;
  CheckList?(props: {}): JSX.Element;
};

const presetIndex: Record<PresetName, Preset> = {
  vampire_v20: VtM,
  changeling_v20: CtD,
  hunter_v20: HH2,
};

export function usePresetInfo(): PresetInfo {
  const { preset } = usePreset();

  const { CharSheet, CheckList } = presetIndex[preset];

  return {
    CharSheet,
    CheckList,
  };
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

      const { translateDropdownOptions: translateCharsheetContentI18n } =
        presetIndex[preset];

      if (translateCharsheetContentI18n !== undefined) {
        translateCharsheetContentI18n(store, prevLanguage, lng);
      } else {
        console.warn(`TODO implement translation for ${preset}`);
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
  const {
    i18n: { language },
  } = useTranslation();

  return useMemo(() => {
    const {
      displayName,
      profileConfig,
      attributesConfig,
      abilitiesConfig,
      freebiePointsConfig,
      getDropdownOptions,
    } = presetIndex[preset];

    return {
      displayName,
      profileConfig,
      attributesConfig,
      abilitiesConfig,
      freebiePointsConfig,
      dropdownOptions: getDropdownOptions?.(language),
    };
  }, [preset, language]);
}
