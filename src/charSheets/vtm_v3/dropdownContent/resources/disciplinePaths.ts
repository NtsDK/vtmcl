import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import {
  generateIdEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import {
  disciplinePathGroupsSource,
  disciplinePathsSource,
} from "../../../vtm/dropdownContent/resources/disciplinePathsSource";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type DisciplinePathGroupName =
  | "assamite_sorcery"
  | "koldunic_sorcery"
  | "necromancy"
  | "thaumaturgy";

interface DisciplinePathEntity {
  en: string;
  ru: string;
  groupName: DisciplinePathGroupName;
}

export const disciplinePathEntitySchema: JSONSchemaType<DisciplinePathEntity> =
  {
    type: "object",
    properties: {
      en: { type: "string" },
      ru: { type: "string" },
      groupName: {
        type: "string",
        enum: [
          "assamite_sorcery",
          "koldunic_sorcery",
          "necromancy",
          "thaumaturgy",
        ],
      },
    },
    required: ["en", "ru", "groupName"],
    additionalProperties: false,
  };

export const validateDisciplinePathEntity = ajv.compile(
  disciplinePathEntitySchema,
);

export function* generateDisciplinePathEntities(
  gen: Generator<string, void, unknown>,
): Generator<DisciplinePathEntity, void, unknown> {
  for (let value of gen) {
    const [en, ru, groupName] = value.split("\n").map(R.trim);

    const el = {
      en,
      ru,
      groupName,
    };

    if (!validateDisciplinePathEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateDisciplinePathEntity.errors, null, "  "),
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateDisciplinePathEntity.errors, null, "  "),
      );
    }
    yield el;
  }
}

const sourceArr = [
  ...generateDisciplinePathEntities(generateSequence(3, disciplinePathsSource)),
];

export const translateDisciplinePath = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

// console.log('clan', sourceArr);
// console.log('groups', groups);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: DisciplinePathGroupName[] = [
  "assamite_sorcery",
  "koldunic_sorcery",
  "necromancy",
  "thaumaturgy",
];

const disciplinePathGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, disciplinePathGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), disciplinePathGroupsArr);

export const disciplinePathDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const disciplinePathDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));

// console.log('displayGroups_en', displayGroups_en);
// console.log('displayGroups_ru', displayGroups_ru);
