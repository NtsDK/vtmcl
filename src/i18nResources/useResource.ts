import { useTranslation } from 'react-i18next';
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

  courts_en,
  courts_ru,
  houseDisplayGroups_en,
  houseDisplayGroups_ru,
  seemings_en,
  seemings_ru,
  kiths_en,
  kiths_ru,
} from "./dropdownContent";

export function useResource() {
  const { i18n } = useTranslation();
  const { language } = i18n;

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
      }
}
