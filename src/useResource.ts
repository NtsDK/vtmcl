import { useTranslation } from 'react-i18next';
import {
  archetypes_en,
  archetypes_ru,
  generations_en,
  generations_ru
} from "./i18nResources";

export function useResource() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return {
    archetypes: language === 'ru'
      ? archetypes_ru
      : archetypes_en,
    generations: language === 'ru'
      ? generations_ru
      : generations_en,
  }
}
