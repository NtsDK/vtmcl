import i18n from 'i18next';
import { DefaultNamespace, initReactI18next, TFuncKey, Resources } from 'react-i18next';
import { resources, defaultLang } from './i18nResources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };

// This stuff adds type checking of translation keys
declare module 'react-i18next' {
  type DefaultResources2 = typeof resources[typeof defaultLang];
  interface Resources extends DefaultResources2 {}
}