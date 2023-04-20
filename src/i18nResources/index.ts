import { ruTranslation } from "./ruTranslation";
import { enTranslation } from "./enTranslation";

export * from "./useResource";
export * from "./useCharsheetContentI18n";

export const defaultLang = "ru";

export const resources = {
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};
