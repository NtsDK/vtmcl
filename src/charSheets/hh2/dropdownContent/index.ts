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
  v20_backgrounds_ru,
  v20_backgrounds_en,
} from "../../vtm/dropdownContent/resources/backgrounds";
import {
  v20_flaws_ru,
  v20_merits_ru,
  v20_flaws_en,
  v20_merits_en,
} from "../../vtm/dropdownContent/resources/meritsAndFlaws";

export type HH2DropdownOptions = Merge<
  CommonDropdownOptions,
  {
    archetypeOptions: string[];
  }
>;

export function getDropdownOptions(language: string): HH2DropdownOptions {
  return language === "ru"
    ? {
        archetypeOptions: archetypes_ru,
        backgroundOptions: v20_backgrounds_ru,
        flawOptions: v20_flaws_ru,
        meritOptions: v20_merits_ru,
      }
    : {
        archetypeOptions: archetypes_en,
        backgroundOptions: v20_backgrounds_en,
        flawOptions: v20_flaws_en,
        meritOptions: v20_merits_en,
      };
}

export function useDropdownOptions(): HH2DropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
