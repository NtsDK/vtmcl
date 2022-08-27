import { useTranslation } from 'react-i18next';
import {
  archetypes_en,
  archetypes_ru,
  generations_en,
  generations_ru,
  clanDisplayGroups_en,
  clanDisplayGroups_ru,
} from "./i18nResources";

export function useResource() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return language === 'ru'
    ? {
        archetypes: archetypes_ru,
        generations: generations_ru,
        clanDisplayGroups: clanDisplayGroups_ru
      }
    : {
        archetypes: archetypes_en,
        generations: generations_en,
        clanDisplayGroups: clanDisplayGroups_en
      }
}
