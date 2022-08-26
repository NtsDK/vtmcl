import * as R from 'ramda';

import { archetypesSource } from "./archetypesSource";

const archetypePairsArr = R.splitEvery(2, archetypesSource.split('\n').map(R.trim));

// @ts-ignore
export const archetypes_en: string[] = R.pipe(
  // @ts-ignore
  R.map(R.nth(0)),
  // @ts-ignore
  R.sort((a,b) => a?.localeCompare(b))
)(archetypePairsArr);

// @ts-ignore
export const archetypes_ru: string[] = R.pipe(
  // @ts-ignore
  R.map(R.nth(1)),
  // @ts-ignore
  R.sort((a,b) => a?.localeCompare(b))
)(archetypePairsArr);

export const index = archetypePairsArr.reduce((acc: {
  'ru-en': Record<string, string>;
  'en-ru': Record<string, string>;
}, [enName, ruName]) => {
  acc['en-ru'][enName] = ruName;
  acc['ru-en'][ruName] = enName;
  return acc;
}, {
  'ru-en': {},
  'en-ru': {}
});

// const archetypesTranslationIndex = archetypePairsArr.reduce((
//   acc: Record<string, string>, [enName, ruName]) => {
//     acc[enName] = ruName;
//     acc[ruName] = enName;
//     return acc;
//   }, {});

export function translateArchetype(
  archetype: string,
  prevLang: string,
  lang: string
): string {
  // @ts-ignore
  const subIndex: Record<string, string> | undefined = index[`${prevLang}-${lang}`];
  return subIndex?.[archetype] || archetype;
}

// console.log(personalityArchetypes_en, personalityArchetypes_ru, enRuIndex, ruEnIndex);
