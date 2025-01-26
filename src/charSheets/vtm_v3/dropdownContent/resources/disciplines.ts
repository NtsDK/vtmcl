import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import {
  generateIdEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import {
  disciplineGroupsSource,
  disciplinesSource,
} from "../../../vtm/dropdownContent/resources/disciplinesSource";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type DisciplineGroupName = "widespread-discipline" | "bloodline-discipline";

interface DisciplineEntity {
  en: string;
  ru: string;
  groupName: DisciplineGroupName;
}

export const disciplineEntitySchema: JSONSchemaType<DisciplineEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    groupName: {
      type: "string",
      enum: ["widespread-discipline", "bloodline-discipline"],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validateDisciplineEntity = ajv.compile(disciplineEntitySchema);

export function* generateDisciplineEntities(
  gen: Generator<string, void, unknown>,
): Generator<DisciplineEntity, void, unknown> {
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

    if (!validateDisciplineEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateDisciplineEntity.errors, null, "  "),
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateDisciplineEntity.errors, null, "  "),
      );
    }
    yield el;
  }
}

const sourceArr = [
  ...generateDisciplineEntities(generateSequence(3, disciplinesSource)),
];

export const translateDiscipline = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: DisciplineGroupName[] = [
  "widespread-discipline",
  "bloodline-discipline",
];

const disciplineGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, disciplineGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), disciplineGroupsArr);

export const disciplineDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const disciplineDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));
