import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStore } from './services/store';
import { translateArchetype } from "./i18nResources";

export function useCharsheetContentI18n() {
  const { i18n } = useTranslation();
  const {
    profile,
    setProfileItem
  } = useStore();

  const [ prevLanguage, setPrevLanguage ] = useState(i18n.language);

  useEffect(() => {
    const cb = (lng: string) => {
      console.log('language', prevLanguage, 'new lang', lng);
      setPrevLanguage(lng);
      // console.log('languageChanged', lng);
      if (prevLanguage === lng) {
        return;
      }
      setProfileItem('nature',
        translateArchetype(profile.nature, prevLanguage, lng)
      );
    };

    i18n.on('languageChanged', cb);
    return () => {
      i18n.off('languageChanged', cb);
    };
  }, [
    i18n,
    profile,
    setProfileItem,
    prevLanguage
  ]);

  // console.log('language', language);

  // useEffect(() => {
    // setProfileItem('nature',
    //   translateArchetype(profile.nature) ?? profile.nature
    // );
  // }, [language]);
}
