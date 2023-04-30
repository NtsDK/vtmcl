import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";

import { usePreset } from "../charSheets/root/services/storageAdapter";
import { useStore } from "../charSheets/root/services/store";

import { VtM } from "./vtm";
import { CtD } from "./ctd";
import { HH2 } from "./hh2";
import {
  FreebiePointItem,
  PresetName,
  InternalPresetProps,
} from "./root/domain";
import { Preset } from "./types";

type ExternalPresetProps = {
  CharSheet(props: {}): JSX.Element;
  CheckList?(props: {}): JSX.Element;
  freebiePointsConfig?: FreebiePointItem[];
};

const presetIndex: Record<PresetName, Preset> = {
  vampire_v20: VtM,
  changeling_v20: CtD,
  hunter_v20: HH2,
};

export function useExternalPresetProps(): ExternalPresetProps {
  const { preset } = usePreset();

  return R.pick(
    ["CharSheet", "CheckList", "freebiePointsConfig"],
    presetIndex[preset]
  );
}

export function useInternalPresetProps(): InternalPresetProps {
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
      getDropdownOptions,
    } = presetIndex[preset];

    return {
      displayName,
      profileConfig,
      attributesConfig,
      abilitiesConfig,
      dropdownOptions: getDropdownOptions?.(language),
    };
  }, [preset, language]);
}

export function useTranslateDropdownOptions(): void {
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

      const { translateDropdownOptions } = presetIndex[preset];

      if (translateDropdownOptions !== undefined) {
        translateDropdownOptions(store, prevLanguage, lng);
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
