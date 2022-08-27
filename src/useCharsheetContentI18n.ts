import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStore } from './services/store';
import {
  translateArchetype,
  translateGeneration,
  translateClan,
  translateBackground,
  translateDiscipline,
  translatePath,
  translateMeritsAndFlaws
} from "./i18nResources";

export function useCharsheetContentI18n() {
  const { i18n } = useTranslation();
  const {
    profile,
    setProfileItem,
    backgrounds,
    setBackgroundName,
    disciplines,
    setDisciplineName,
    state,
    setState,
    merits,
    setMerit,
    flaws,
    setFlaw,
  } = useStore();

  const [ prevLanguage, setPrevLanguage ] = useState(i18n.language);

  useEffect(() => {
    const cb = (lng: string) => {
      // console.log('language', prevLanguage, 'new lang', lng);
      setPrevLanguage(lng);
      // console.log('languageChanged', lng);
      if (prevLanguage === lng) {
        return;
      }
      setProfileItem('nature',
        translateArchetype(profile.nature, prevLanguage, lng)
      );
      setProfileItem('demeanor',
        translateArchetype(profile.demeanor, prevLanguage, lng)
      );
      setProfileItem('generation',
        translateGeneration(profile.generation, prevLanguage, lng)
      );
      setProfileItem('clan',
        translateClan(profile.clan, prevLanguage, lng)
      );
      backgrounds.forEach((background, index) => {
        setBackgroundName(index, translateBackground(background.name, prevLanguage, lng));
      });
      disciplines.forEach((discipline, index) => {
        setDisciplineName(index, translateDiscipline(discipline.name, prevLanguage, lng));
      });
      setState('pathName',
        translatePath(state.pathName, prevLanguage, lng)
      );
      merits.forEach((merit, index) => {
        setMerit(index, translateMeritsAndFlaws(merit, prevLanguage, lng));
      });
      flaws.forEach((flaw, index) => {
        setFlaw(index, translateMeritsAndFlaws(flaw, prevLanguage, lng));
      });
    };

    i18n.on('languageChanged', cb);
    return () => {
      i18n.off('languageChanged', cb);
    };
  }, [
    i18n,
    profile,
    setProfileItem,
    backgrounds,
    setBackgroundName,
    disciplines,
    setDisciplineName,
    state,
    setState,
    merits,
    setMerit,
    flaws,
    setFlaw,
    prevLanguage
  ]);
}
