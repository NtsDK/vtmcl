import i18n from "i18next";
import {
  DefaultNamespace,
  initReactI18next,
  TFuncKey,
  Resources,
} from "react-i18next";
import { resources, defaultLang } from "./i18nResources";
// see https://www.npmjs.com/package/i18next-browser-languagedetector
// for details
import LanguageDetector from "i18next-browser-languagedetector";
import { envInfo } from "./lib/envUtils";
// const languageDetector = new LanguageDetector();
// languageDetector.addDetector({
//   name: 'reactSnap',

//   lookup(options) {
//     if ( envInfo().isArtificialBrowser ) {
//       return 'ru';
//     }
//     return undefined;
//   },
// });

// const setHtmlLangAttr = (lng: string) => {
//   console.log(2233);
//   document.documentElement.setAttribute('lang', lng);
// };
// i18n.on('languageChanged', setHtmlLangAttr);
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
  document.documentElement.setAttribute("lang", lng);
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(languageDetector)
  .init({
    resources,
    lng: "ru",
    // lng: lang,
    fallbackLng: "ru",

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        "reactSnap",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",

      // cache user language
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
      //cookieMinutes: 10,
      //cookieDomain: 'myDomain'
    },
  });

export { i18n };

// This stuff adds type checking of translation keys
declare module "react-i18next" {
  type DefaultResources2 = (typeof resources)[typeof defaultLang];
  interface Resources extends DefaultResources2 {}
}
