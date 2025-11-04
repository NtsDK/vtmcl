import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Merge } from "../../../lib/types";
import { CommonDropdownOptions, OptionGroup } from "../../root/domain";

import {
  mta_backgrounds_en,
  mta_backgrounds_ru,
} from "./resources/backgrounds";
import { archetypes_en, archetypes_ru } from "./resources/archetypes";
import { concepts_en, concepts_ru } from "./resources/concepts";
import { essences_en, essences_ru } from "./resources/essences";
import {
  factions_en,
  factions_ru,
  sectDisplayGroups_en,
  sectDisplayGroups_ru,
} from "./resources/sects";
import { mta_flaws_en, mta_flaws_ru, mta_merits_en, mta_merits_ru } from "./resources/meritsAndFlaws";

export type MtADropdownOptions = Merge<
  CommonDropdownOptions,
  {
    archetypeOptions: string[];
    conceptOptions: string[];
    essenceOptions: string[];
    factionOptions: string[];
    sectOptions: OptionGroup[];
  }
>;

export function getDropdownOptions(language: string): MtADropdownOptions {
  return language === "ru"
    ? {
        backgroundOptions: mta_backgrounds_ru,
        flawOptions: mta_flaws_ru,
        meritOptions: mta_merits_ru,
        archetypeOptions: archetypes_ru,
        conceptOptions: concepts_ru,
        essenceOptions: essences_ru,
        factionOptions: factions_ru,
        sectOptions: sectDisplayGroups_ru,
      }
    : {
        backgroundOptions: mta_backgrounds_en,
        flawOptions: mta_flaws_en,
        meritOptions: mta_merits_en,
        archetypeOptions: archetypes_en,
        conceptOptions: concepts_en,
        essenceOptions: essences_en,
        factionOptions: factions_en,
        sectOptions: sectDisplayGroups_en,
      };
}

export function useMtADropdownOptions(): MtADropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
