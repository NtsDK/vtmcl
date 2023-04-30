import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Merge } from "../../../lib/types";
import { CommonDropdownOptions, OptionGroup } from "../../root/domain";

import { arts_ru, arts_en } from "./resources/arts";
import {
  c20_backgrounds_ru,
  c20_backgrounds_en,
} from "./resources/backgrounds";
import { courts_ru, courts_en } from "./resources/courts";
import {
  houseDisplayGroups_ru,
  houseDisplayGroups_en,
} from "./resources/houses";
import { kiths_ru, kiths_en } from "./resources/kiths";
import { legacies_ru, legacies_en } from "./resources/legacies";
import {
  c20_flaws_ru,
  c20_merits_ru,
  c20_flaws_en,
  c20_merits_en,
} from "./resources/meritsAndFlaws";
import { seemings_ru, seemings_en } from "./resources/seemings";

export type CtDDropdownOptions = Merge<
  CommonDropdownOptions,
  {
    courtOptions: string[];
    houseOptions: OptionGroup[];
    seemingOptions: string[];
    kithOptions: OptionGroup[];
    legacyOptions: OptionGroup[];
    artOptions: string[];
  }
>;

export function getDropdownOptions(language: string): CtDDropdownOptions {
  return language === "ru"
    ? {
        backgroundOptions: c20_backgrounds_ru,
        flawOptions: c20_flaws_ru,
        meritOptions: c20_merits_ru,
        courtOptions: courts_ru,
        houseOptions: houseDisplayGroups_ru,
        seemingOptions: seemings_ru,
        kithOptions: kiths_ru,
        legacyOptions: legacies_ru,
        artOptions: arts_ru,
      }
    : {
        backgroundOptions: c20_backgrounds_en,
        flawOptions: c20_flaws_en,
        meritOptions: c20_merits_en,
        courtOptions: courts_en,
        houseOptions: houseDisplayGroups_en,
        seemingOptions: seemings_en,
        kithOptions: kiths_en,
        legacyOptions: legacies_en,
        artOptions: arts_en,
      };
}

export function useCtDDropdownOptions(): CtDDropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
