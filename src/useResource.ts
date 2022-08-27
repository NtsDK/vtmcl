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
  paths_ru
} from "./i18nResources";

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
      }
    : {
        archetypeOptions: archetypes_en,
        generationOptions: generations_en,
        clanOptions: clanDisplayGroups_en,
        backgroundOptions: backgrounds_en,
        disciplineOptions: disciplineDisplayGroups_en,
        pathOptions: paths_en,
      }
}
