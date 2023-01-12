import { useTranslation } from 'react-i18next';
import { usePreset } from '../services/storageAdapter';
import {
  archetypes_en,
  archetypes_ru,
  generations_en,
  generations_ru,
  clanDisplayGroups_en,
  clanDisplayGroups_ru,
  v20_backgrounds_en,
  v20_backgrounds_ru,
  disciplineDisplayGroups_en,
  disciplineDisplayGroups_ru,
  disciplinePathDisplayGroups_en,
  disciplinePathDisplayGroups_ru,
  paths_en,
  paths_ru,
  v20_flaws_en,
  v20_flaws_ru,
  v20_merits_en,
  v20_merits_ru,
  v20_freePoints_en,
  v20_freePoints_ru,
  ritualDisplayGroups_en,
  ritualDisplayGroups_ru,
  ritualValueOptions,

  courts_en,
  courts_ru,
  houseDisplayGroups_en,
  houseDisplayGroups_ru,
  seemings_en,
  seemings_ru,
  kiths_en,
  kiths_ru,
  legacies_en,
  legacies_ru,
  c20_freePoints_en,
  c20_freePoints_ru,
  arts_en,
  arts_ru,
  c20_backgrounds_en,
  c20_backgrounds_ru,
  c20_flaws_en,
  c20_flaws_ru,
  c20_merits_en,
  c20_merits_ru,
} from "./dropdownContent";

export function useResource() {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { preset } = usePreset();

  return language === 'ru'
    ? {
        archetypeOptions: archetypes_ru,
        generationOptions: generations_ru,
        clanOptions: clanDisplayGroups_ru,
        backgroundOptions: preset === 'vampire_v20'
          ? v20_backgrounds_ru
          : c20_backgrounds_ru,
        disciplineOptions: disciplineDisplayGroups_ru,
        disciplinePathOptions: disciplinePathDisplayGroups_ru,
        pathOptions: paths_ru,
        flawOptions: preset === 'vampire_v20'
          ? v20_flaws_ru
          : c20_flaws_ru,
        meritOptions:  preset === 'vampire_v20'
          ? v20_merits_ru
          : c20_merits_ru,
        courtOptions: courts_ru,
        houseOptions: houseDisplayGroups_ru,
        seemingOptions: seemings_ru,
        kithOptions: kiths_ru,
        legacyOptions: legacies_ru,
        freePoints: preset === 'vampire_v20'
          ? v20_freePoints_ru
          : c20_freePoints_ru,
        artOptions: arts_ru,
        ritualOptions: ritualDisplayGroups_ru,
        ritualValueOptions,
      }
    : {
        archetypeOptions: archetypes_en,
        generationOptions: generations_en,
        clanOptions: clanDisplayGroups_en,
        backgroundOptions: preset === 'vampire_v20'
          ? v20_backgrounds_en
          : c20_backgrounds_en,
        disciplineOptions: disciplineDisplayGroups_en,
        disciplinePathOptions: disciplinePathDisplayGroups_en,
        pathOptions: paths_en,
        flawOptions: preset === 'vampire_v20'
          ? v20_flaws_en
          : c20_flaws_en,
        meritOptions:  preset === 'vampire_v20'
          ? v20_merits_en
          : c20_merits_en,
        courtOptions: courts_en,
        houseOptions: houseDisplayGroups_en,
        seemingOptions: seemings_en,
        kithOptions: kiths_en,
        legacyOptions: legacies_en,
        freePoints: preset === 'vampire_v20'
          ? v20_freePoints_en
          : c20_freePoints_en,
        artOptions: arts_en,
        ritualOptions: ritualDisplayGroups_en,
        ritualValueOptions,
      }
}
