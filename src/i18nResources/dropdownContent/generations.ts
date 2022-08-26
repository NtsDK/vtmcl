import * as R from 'ramda';

import { generationsSource } from "./generationsSource";
import { generateEnRuEntities, generateSequence } from './utils';

const sourceArr = [...generateEnRuEntities(generateSequence(2, generationsSource))]

export const generations_en: string[] = R.pluck('en', sourceArr);

export const generations_ru: string[] = R.pluck('ru', sourceArr);

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

// // const archetypesTranslationIndex = archetypePairsArr.reduce((
// //   acc: Record<string, string>, [enName, ruName]) => {
// //     acc[enName] = ruName;
// //     acc[ruName] = enName;
// //     return acc;
// //   }, {});

export function translateGeneration(
  generation: string,
  prevLang: string,
  lang: string
): string {
  // @ts-ignore
  const subIndex: Record<string, string> | undefined = index[`${prevLang}-${lang}`];
  return subIndex?.[generation] || generation;
}

// console.log(personalityArchetypes_en, personalityArchetypes_ru, enRuIndex, ruEnIndex);
