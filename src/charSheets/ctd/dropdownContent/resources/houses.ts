import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import { housesSource, houseGroupsSource } from "./housesSource";

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

type HouseGroupName = "seelie" | "unseelie";

interface HouseEntity {
  en: string;
  ru: string;
  groupName: HouseGroupName;
}

export const houseEntitySchema: JSONSchemaType<HouseEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    groupName: {
      type: "string",
      enum: ["seelie", "unseelie"],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validateHouseEntity = ajv.compile(houseEntitySchema);

export function* generateHouseEntities(
  gen: Generator<string, void, unknown>
): Generator<HouseEntity, void, unknown> {
  for (let value of gen) {
    const [enLine, ruLine, groupLine] = value.split("\n");
    const groupSeparators = /[[\]]/g;
    const groupName = groupLine
      .split(groupSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const el = {
      en: enLine.trim(),
      ru: ruLine.trim(),
      groupName: groupName[0],
    };

    if (!validateHouseEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateHouseEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateHouseEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}

const sourceArr = [...generateHouseEntities(generateSequence(3, housesSource))];

export const translateHouse = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

// console.log('clan', sourceArr);
// console.log('groups', groups);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: HouseGroupName[] = ["seelie", "unseelie"];

const houseGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, houseGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), houseGroupsArr);

export const houseDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const houseDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));

// console.log('displayGroups_en', displayGroups_en);
// console.log('displayGroups_ru', displayGroups_ru);
