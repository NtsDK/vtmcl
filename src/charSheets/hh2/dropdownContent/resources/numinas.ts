import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import { numinaGroupsSource, numinaSource } from "./numinaSource";

import {
  generateIdEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type NuminaGroupName = "hedge_magic" | "psychic_numina";

interface NuminaEntity {
  en: string;
  ru: string;
  groupName: NuminaGroupName;
}

export const numinaEntitySchema: JSONSchemaType<NuminaEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    groupName: {
      type: "string",
      enum: ["hedge_magic", "psychic_numina"],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validateNuminaEntity = ajv.compile(numinaEntitySchema);

export function* generateNuminaEntities(
  gen: Generator<string, void, unknown>
): Generator<NuminaEntity, void, unknown> {
  for (let value of gen) {
    const [en, ru, groupName] = value.split("\n").map(R.trim);

    const el = {
      en,
      ru,
      groupName,
    };

    if (!validateNuminaEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateNuminaEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateNuminaEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}

const sourceArr = [
  ...generateNuminaEntities(generateSequence(3, numinaSource)),
];

export const translateNumina = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: NuminaGroupName[] = ["hedge_magic", "psychic_numina"];

const numinaGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, numinaGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), numinaGroupsArr);

export const numinaDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const numinaDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));
