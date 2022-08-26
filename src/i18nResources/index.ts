import { ruTranslation } from "./ruTranslation";
import { enTranslation } from "./enTranslation";
export * from './dropdownContent';

export const defaultLang = 'ru';

export const resources = {
  ru: {
    translation: ruTranslation
  },
  en: {
    translation: enTranslation
  }
};
