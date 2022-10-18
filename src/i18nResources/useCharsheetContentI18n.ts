import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePreset } from '../services/storageAdapter';

import { useStore } from '../services/store';
import {
  translateArchetype,
  translateGeneration,
  translateClan,
  v20_translateBackground,
  c20_translateBackground,
  translateDiscipline,
  translateDisciplinePath,
  translatePath,
  v20_translateMeritsAndFlaws,
  c20_translateMeritsAndFlaws,
  translateCourt,
  translateSeeming,
  translateHouse,
  translateKith,
  translateLegacy,
  translateArt,
} from "./dropdownContent";

export function useCharsheetContentI18n() {
  const { i18n } = useTranslation();
  const {
    profile,
    setProfileItem,
    backgrounds,
    setBackgroundName,
    disciplines,
    setDisciplineName,
    disciplinePaths,
    setDisciplinePathName,
    state,
    setState,
    merits,
    setMerit,
    flaws,
    setFlaw,
    arts,
    setArtName
  } = useStore();

  const [ prevLanguage, setPrevLanguage ] = useState(i18n.language);

  const { preset } = usePreset();

  const translateBackground = preset === 'vampire_v20'
    ? v20_translateBackground
    : c20_translateBackground
  ;

  const translateMeritsAndFlaws = preset === 'vampire_v20'
    ? v20_translateMeritsAndFlaws
    : c20_translateMeritsAndFlaws
  ;

  useEffect(() => {
    const cb = (lng: string) => {
      // console.log('language', prevLanguage, 'new lang', lng);
      setPrevLanguage(lng);
      // console.log('languageChanged', lng);
      if (prevLanguage === lng) {
        return;
      }
      // vampire
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
      // changeling
      setProfileItem('court',
        translateCourt(profile.court, prevLanguage, lng)
      );
      setProfileItem('seeming',
        translateSeeming(profile.seeming, prevLanguage, lng)
      );
      setProfileItem('house',
        translateHouse(profile.house, prevLanguage, lng)
      );
      setProfileItem('kith',
        translateKith(profile.kith, prevLanguage, lng)
      );
      setProfileItem('primaryLegacy',
        translateLegacy(profile.primaryLegacy, prevLanguage, lng)
      );
      setProfileItem('secondaryLegacy',
        translateLegacy(profile.secondaryLegacy, prevLanguage, lng)
      );

      // vampire
      backgrounds.forEach((background, index) => {
        setBackgroundName(index, translateBackground(background.name, prevLanguage, lng));
      });
      disciplines.forEach((discipline, index) => {
        setDisciplineName(index, translateDiscipline(discipline.name, prevLanguage, lng));
      });
      disciplinePaths.forEach((disciplinePath, index) => {
        setDisciplinePathName(index, translateDisciplinePath(disciplinePath.name, prevLanguage, lng));
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

      // changeling
      arts.forEach((art, index) => {
        setArtName(index, translateArt(art.name, prevLanguage, lng));
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
    disciplinePaths,
    setDisciplinePathName,
    state,
    setState,
    merits,
    setMerit,
    flaws,
    setFlaw,
    prevLanguage,
    arts,
    setArtName,
    translateBackground,
    translateMeritsAndFlaws,
  ]);
}
