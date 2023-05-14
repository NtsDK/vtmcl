import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  CommonDropdownOptions,
  OptionGroup,
} from "../../../charSheets/root/domain";
import { Merge } from "../../../lib/types";
import {
  archetypes_en,
  archetypes_ru,
} from "../../vtm/dropdownContent/resources/archetypes";
import {
  v20_flaws_ru,
  v20_merits_ru,
  v20_flaws_en,
  v20_merits_en,
} from "../../vtm/dropdownContent/resources/meritsAndFlaws";

import { conceptGroups_en, conceptGroups_ru } from "./resources/concepts";
import {
  backgroundGroups_en,
  backgroundGroups_ru,
} from "./resources/backgrounds";
import {
  numinaDisplayGroups_en,
  numinaDisplayGroups_ru,
} from "./resources/numinas";

export type HH2DropdownOptions = Merge<
  CommonDropdownOptions,
  {
    archetypeOptions: string[];
    conceptOptions: OptionGroup[];
    numinaOptions: OptionGroup[];
  }
>;

export function getDropdownOptions(language: string): HH2DropdownOptions {
  return language === "ru"
    ? {
        archetypeOptions: archetypes_ru,
        conceptOptions: conceptGroups_ru,
        backgroundOptions: backgroundGroups_ru,
        flawOptions: v20_flaws_ru,
        meritOptions: v20_merits_ru,
        numinaOptions: numinaDisplayGroups_ru,
      }
    : {
        archetypeOptions: archetypes_en,
        conceptOptions: conceptGroups_en,
        backgroundOptions: backgroundGroups_en,
        flawOptions: v20_flaws_en,
        meritOptions: v20_merits_en,
        numinaOptions: numinaDisplayGroups_en,
      };
}

export function useDropdownOptions(): HH2DropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
