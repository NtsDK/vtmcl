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
// import {
//   disciplinePathDisplayGroups_ru,
//   disciplinePathDisplayGroups_en,
// } from "./resources/disciplinePaths";
import {
  disciplineDisplayGroups_ru,
  disciplineDisplayGroups_en,
} from "./resources/disciplines";
// import { generations_ru, generations_en } from "./resources/generations";
// import {
//   v20_flaws_ru,
//   v20_merits_ru,
//   v20_flaws_en,
//   v20_merits_en,
// } from "./resources/meritsAndFlaws";
// import { paths_ru, paths_en } from "./resources/paths";
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
    // disciplinePathOptions: OptionGroup[];
    // pathOptions: string[];
    // ritualOptions: OptionGroup[];
    // ritualValueOptions: string[];
  }
>;

export function getDropdownOptions(language: string): VtDADropdownOptions {
  return language === "ru"
    ? {
        archetypeOptions: archetypes_ru,
        flawOptions: [],
        meritOptions: [],
        conceptOptions: concepts_ru,
        generationOptions: generations_ru,
        clanOptions: clanDisplayGroups_ru,
        backgroundOptions: backgrounds_ru,
        disciplineOptions: disciplineDisplayGroups_ru,
        // disciplinePathOptions: disciplinePathDisplayGroups_ru,
        // pathOptions: paths_ru,
        // flawOptions: v20_flaws_ru,
        // meritOptions: v20_merits_ru,
        // ritualOptions: ritualDisplayGroups_ru,
        // ritualValueOptions,
      }
    : {
        archetypeOptions: archetypes_en,
        flawOptions: [],
        meritOptions: [],
        conceptOptions: concepts_en,
        generationOptions: generations_en,
        clanOptions: clanDisplayGroups_en,
        backgroundOptions: backgrounds_en,
        disciplineOptions: disciplineDisplayGroups_en,
        // disciplinePathOptions: disciplinePathDisplayGroups_en,
        // pathOptions: paths_en,
        // flawOptions: v20_flaws_en,
        // meritOptions: v20_merits_en,
        // ritualOptions: ritualDisplayGroups_en,
        // ritualValueOptions,
      };
}

export function useDropdownOptions(): VtDADropdownOptions {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return useMemo(() => getDropdownOptions(language), [language]);
}
