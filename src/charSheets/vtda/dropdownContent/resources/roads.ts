import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import {
  generateEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

import { roadsSource, aurasSource } from "./roadsSource";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

export const sourceArr = [
  ...generateEnRuEntities(generateSequence(2, roadsSource)),
];

export const roads_en: string[] = sortStrArr(R.pluck("en", sourceArr));

export const roads_ru: string[] = sortStrArr(R.pluck("ru", sourceArr));

export const translateRoad = makeTranslateFunction(sourceArr);

interface AuraEntity {
  en: string;
  ru: string;
  roadEn: string;
  roadRu: string;
}

export const auraEntitySchema: JSONSchemaType<AuraEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    roadEn: { type: "string" },
    roadRu: { type: "string" },
  },
  required: ["en", "ru", "roadEn", "roadRu"],
  additionalProperties: false,
};

export const validateAuraEntity = ajv.compile(auraEntitySchema);

const index = R.indexBy(R.prop("en"), sourceArr);

export function* generateAuraEntities(
  gen: Generator<string, void, unknown>
): Generator<AuraEntity, void, unknown> {
  for (let value of gen) {
    const [roadEn, en, ru] = value.split("\n").map(R.trim);
    const el = {
      en,
      ru,
      roadEn: index[roadEn].en,
      roadRu: index[roadEn].ru,
    };

    if (!validateAuraEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateAuraEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateAuraEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}

export const auraSourceArr = [
  ...generateAuraEntities(generateSequence(3, aurasSource)),
];

export const translateAura = makeTranslateFunction(auraSourceArr);

export const auraGroups_en = R.sortBy(
  R.prop("groupName"),
  auraSourceArr.map((el) => ({
    groupName: el.roadEn,
    arr: [el.en],
  }))
);

export const auraGroups_ru = R.sortBy(
  R.prop("groupName"),
  auraSourceArr.map((el) => ({
    groupName: el.roadRu,
    arr: [el.ru],
  }))
);
