import * as R from 'ramda';

import { backgroundsSource } from "./backgroundsSource";
import { generateEnRuEntities, generateSequence, makeTranslateFunction } from './utils';

const sourceArr = [...generateEnRuEntities(generateSequence(2, backgroundsSource))];

export const backgrounds_en: string[] = R.pluck('en', sourceArr);

export const backgrounds_ru: string[] = R.pluck('ru', sourceArr);

export const translateBackground = makeTranslateFunction(sourceArr);
