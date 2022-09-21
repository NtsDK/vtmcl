import { useTranslation } from 'react-i18next';
import { usePreset } from '../services/storageAdapter';
import {
  archetypes_en,
  archetypes_ru,
  generations_en,
  generations_ru,
  clanDisplayGroups_en,
  clanDisplayGroups_ru,
  backgrounds_en,
  backgrounds_ru,
  disciplineDisplayGroups_en,
  disciplineDisplayGroups_ru,
  paths_en,
  paths_ru,
  flaws_en,
  flaws_ru,
  merits_en,
  merits_ru,
  v20_freePoints_en,
  v20_freePoints_ru,

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
  arts_ru
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
        backgroundOptions: backgrounds_ru,
        disciplineOptions: disciplineDisplayGroups_ru,
        pathOptions: paths_ru,
        flawOptions: flaws_ru,
        meritOptions: merits_ru,
        courtOptions: courts_ru,
        houseOptions: houseDisplayGroups_ru,
        seemingOptions: seemings_ru,
        kithOptions: kiths_ru,
        legacyOptions: legacies_ru,
        freePoints: preset === 'vampire_v20'
          ? v20_freePoints_ru
          : c20_freePoints_ru,
        artOptions: arts_ru,
      }
    : {
        archetypeOptions: archetypes_en,
        generationOptions: generations_en,
        clanOptions: clanDisplayGroups_en,
        backgroundOptions: backgrounds_en,
        disciplineOptions: disciplineDisplayGroups_en,
        pathOptions: paths_en,
        flawOptions: flaws_en,
        meritOptions: merits_en,
        courtOptions: courts_en,
        houseOptions: houseDisplayGroups_en,
        seemingOptions: seemings_en,
        kithOptions: kiths_en,
        legacyOptions: legacies_en,
        freePoints: preset === 'vampire_v20'
          ? v20_freePoints_en
          : c20_freePoints_en,
        artOptions: arts_en,
      }
}
