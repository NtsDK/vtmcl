import * as R from "ramda";

export function* generateSequence(
  rowNumber: number,
  str: string
): Generator<string, void, unknown> {
  const arr = R.splitEvery(rowNumber, str.split("\n"));
  for (let i = 0; i < arr.length; i++) {
    yield arr[i].join("\n");
  }
}

export function makeTranslateFunction(
  sourceArr: {
    en: string;
    ru: string;
  }[]
): (str: string, prevLang: string, lang: string) => string {
  const index = sourceArr.reduce(
    (
      acc: {
        "ru-en": Record<string, string>;
        "en-ru": Record<string, string>;
      },
      { en, ru }
    ) => {
      acc["en-ru"][en] = ru;
      acc["ru-en"][ru] = en;
      return acc;
    },
    {
      "ru-en": {},
      "en-ru": {},
    }
  );

  return function (str: string, prevLang: string, lang: string): string {
    const subIndex: Record<string, string> | undefined =
      // @ts-ignore
      index[`${prevLang}-${lang}`];
    return subIndex?.[str] || str;
  };
}

export const sortStrArr = R.sort<string>((a, b) => a.localeCompare(b));
