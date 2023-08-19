import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";
import {
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
  generateIdEnRuEntities,
} from "../../../generic/dropdownContent";

import { ritualsSource, ritualGroupsSource } from "./ritualsSource";

// import {
//   generateIdEnRuEntities,
//   generateSequence,
//   makeTranslateFunction,
//   sortStrArr,
// } from "../utils";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type RitualGroupName =
  | "necromantic-1"
  | "necromantic-2"
  | "necromantic-3"
  | "necromantic-4"
  | "necromantic-5"
  | "thaumaturgical-1"
  | "thaumaturgical-2"
  | "thaumaturgical-3"
  | "thaumaturgical-4"
  | "thaumaturgical-5";

interface RitualEntity {
  en: string;
  ru: string;
  groupName: RitualGroupName;
}

export const ritualEntitySchema: JSONSchemaType<RitualEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    groupName: {
      type: "string",
      enum: [
        "necromantic-1",
        "necromantic-2",
        "necromantic-3",
        "necromantic-4",
        "necromantic-5",
        "thaumaturgical-1",
        "thaumaturgical-2",
        "thaumaturgical-3",
        "thaumaturgical-4",
        "thaumaturgical-5",
      ],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validateRitualEntity = ajv.compile(ritualEntitySchema);

export function* generateRitualEntities(
  gen: Generator<string, void, unknown>
): Generator<RitualEntity, void, unknown> {
  for (let value of gen) {
    const [en, ru, groupLine] = value.split("\n").map(R.trim);
    const groupSeparators = /[[\]]/g;
    const [groupName] = groupLine
      .split(groupSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const el = {
      en,
      ru,
      groupName,
    };

    if (!validateRitualEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateRitualEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateRitualEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}

const sourceArr = [
  ...generateRitualEntities(generateSequence(3, ritualsSource)),
];

export const translateRitual = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: RitualGroupName[] = [
  "necromantic-1",
  "necromantic-2",
  "necromantic-3",
  "necromantic-4",
  "necromantic-5",
  "thaumaturgical-1",
  "thaumaturgical-2",
  "thaumaturgical-3",
  "thaumaturgical-4",
  "thaumaturgical-5",
];

const ritualGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, ritualGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), ritualGroupsArr);

export const ritualDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const ritualDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));

export const ritualValueOptions = [
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
