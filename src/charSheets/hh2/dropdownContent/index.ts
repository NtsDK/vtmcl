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

import { conceptGroups_en, conceptGroups_ru } from "./resources/concepts";
import {
  backgroundGroups_en,
  backgroundGroups_ru,
} from "./resources/backgrounds";
import {
  numinaDisplayGroups_en,
  numinaDisplayGroups_ru,
} from "./resources/numinas";
import {
  flaws_ru,
  merits_ru,
  flaws_en,
  merits_en,
} from "./resources/meritsAndFlaws";

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
        flawOptions: flaws_ru,
        meritOptions: merits_ru,
        numinaOptions: numinaDisplayGroups_ru,
      }
    : {
        archetypeOptions: archetypes_en,
        conceptOptions: conceptGroups_en,
        backgroundOptions: backgroundGroups_en,
        flawOptions: flaws_en,
        meritOptions: merits_en,
        numinaOptions: numinaDisplayGroups_en,
      };
}

export function useDropdownOptions(): HH2DropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
