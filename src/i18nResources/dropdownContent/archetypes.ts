import * as R from 'ramda';

import { archetypesSource } from "./archetypesSource";
import { generateEnRuEntities, generateSequence } from './utils';

const sourceArr = [...generateEnRuEntities(generateSequence(2, archetypesSource))]

export const archetypes_en: string[] = R.sort(
  (a, b) => a.localeCompare(b),
  R.pluck('en', sourceArr)
);

export const archetypes_ru: string[] = R.sort(
  (a, b) => a.localeCompare(b),
  R.pluck('ru', sourceArr)
);

const index = sourceArr.reduce((acc: {
  'ru-en': Record<string, string>;
  'en-ru': Record<string, string>;
}, { en, ru} ) => {
  acc['en-ru'][en] = ru;
  acc['ru-en'][ru] = en;
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
