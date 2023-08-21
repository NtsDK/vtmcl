import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  CommonDropdownOptions,
  OptionGroup,
} from "../../../charSheets/root/domain";
import { Merge } from "../../../lib/types";
import {
  generations_en,
  generations_ru,
} from "../../vtm/dropdownContent/resources/generations";

import { archetypes_ru, archetypes_en } from "./resources/archetypes";
import { backgrounds_ru, backgrounds_en } from "./resources/backgrounds";
import { clanDisplayGroups_ru, clanDisplayGroups_en } from "./resources/clans";
import { concepts_en, concepts_ru } from "./resources/concepts";
import {
  roads_en,
  roads_ru,
  auraGroups_en,
  auraGroups_ru,
} from "./resources/roads";
// import {
//   disciplinePathDisplayGroups_ru,
//   disciplinePathDisplayGroups_en,
// } from "./resources/disciplinePaths";
import {
  disciplineDisplayGroups_ru,
  disciplineDisplayGroups_en,
} from "./resources/disciplines";
import {
  v20_flaws_en,
  v20_flaws_ru,
  v20_merits_en,
  v20_merits_ru,
} from "../../vtm/dropdownContent/resources/meritsAndFlaws";
import { ritualValueOptions } from "../../vtm/dropdownContent/resources/rituals";
// import {
//   ritualDisplayGroups_ru,
//   ritualValueOptions,
//   ritualDisplayGroups_en,
// } from "./resources/rituals";

export type VtDADropdownOptions = Merge<
  CommonDropdownOptions,
  {
    archetypeOptions: string[];
    conceptOptions: string[];
    generationOptions: string[];
    clanOptions: OptionGroup[];
    disciplineOptions: OptionGroup[];
    roadOptions: string[];
    auraOptions: OptionGroup[];
    // disciplinePathOptions: OptionGroup[];
    // ritualOptions: OptionGroup[];
    ritualValueOptions: string[];
  }
>;

export function getDropdownOptions(language: string): VtDADropdownOptions {
  return language === "ru"
    ? {
        archetypeOptions: archetypes_ru,
        conceptOptions: concepts_ru,
        generationOptions: generations_ru,
        clanOptions: clanDisplayGroups_ru,
        backgroundOptions: backgrounds_ru,
        disciplineOptions: disciplineDisplayGroups_ru,
        roadOptions: roads_ru,
        auraOptions: auraGroups_ru,
        // disciplinePathOptions: disciplinePathDisplayGroups_ru,
        flawOptions: v20_flaws_ru,
        meritOptions: v20_merits_ru,
        // ritualOptions: ritualDisplayGroups_ru,
        ritualValueOptions,
      }
    : {
        archetypeOptions: archetypes_en,
        conceptOptions: concepts_en,
        generationOptions: generations_en,
        clanOptions: clanDisplayGroups_en,
        backgroundOptions: backgrounds_en,
        disciplineOptions: disciplineDisplayGroups_en,
        roadOptions: roads_en,
        auraOptions: auraGroups_en,
        // disciplinePathOptions: disciplinePathDisplayGroups_en,
        flawOptions: v20_flaws_en,
        meritOptions: v20_merits_en,
        // ritualOptions: ritualDisplayGroups_en,
        ritualValueOptions,
      };
}

export function useDropdownOptions(): VtDADropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
