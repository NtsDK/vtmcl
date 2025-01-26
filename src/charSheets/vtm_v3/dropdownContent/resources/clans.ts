import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import {
  generateIdEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";
import {
  clanGroupsSource,
  clansSource,
} from "../../../vtm/dropdownContent/resources/clansSource";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type ClanGroupName =
  | "camarilla-clan"
  | "sabbat-clan"
  | "independent-clan"
  | "independent-bloodline"
  | "exterminated-bloodline"
  | "camarilla-bloodline"
  | "sabbat-bloodline";

interface ClanEntity {
  en: string;
  enNickname?: string;
  enSubClan?: string;
  ru: string;
  ruNickname?: string;
  ruSubClan?: string;
  groupName: ClanGroupName;
}

export const clanEntitySchema: JSONSchemaType<ClanEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    enNickname: { type: "string", nullable: true },
    enSubClan: { type: "string", nullable: true },
    ru: { type: "string" },
    ruNickname: { type: "string", nullable: true },
    ruSubClan: { type: "string", nullable: true },
    groupName: {
      type: "string",
      enum: [
        "camarilla-clan",
        "sabbat-clan",
        "independent-clan",
        "independent-bloodline",
        "exterminated-bloodline",
        "camarilla-bloodline",
        "sabbat-bloodline",
      ],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validateClanEntity = ajv.compile(clanEntitySchema);

export function* generateClanEntities(
  gen: Generator<string, void, unknown>,
): Generator<ClanEntity, void, unknown> {
  for (let value of gen) {
    const [enLine, ruLine, groupLine] = value.split("\n");
    const langSeparators = /[(,)]/g;
    const groupSeparators = /[[\]]/g;
    const enArr = enLine
      .split(langSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const ruArr = ruLine
      .split(langSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const groupName = groupLine
      .split(groupSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const el = {
      en: enArr[0],
      enNickname: enArr[1],
      enSubClan: enArr[2],
      ru: ruArr[0],
      ruNickname: ruArr[1],
      ruSubClan: ruArr[2],
      groupName: groupName[0],
    };

    if (!validateClanEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateClanEntity.errors, null, "  "),
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateClanEntity.errors, null, "  "),
      );
    }
    yield el;
  }
}

const sourceArr = [...generateClanEntities(generateSequence(3, clansSource))];

export const translateClan = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr);

// console.log('clan', sourceArr);
// console.log('groups', groups);

const groups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, groups);

const groups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, groups);

const groupOrder: ClanGroupName[] = [
  "camarilla-clan",
  "sabbat-clan",
  "independent-clan",
  "camarilla-bloodline",
  "sabbat-bloodline",
  "independent-bloodline",
  "exterminated-bloodline",
];

const clanGroupsArr = [
  ...generateIdEnRuEntities(generateSequence(3, clanGroupsSource)),
];

const groupIndex = R.indexBy(R.prop("id"), clanGroupsArr);

export const clanDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].en,
  arr: groups_en[groupName] as string[],
}));

export const clanDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: groupIndex[groupName].ru,
  arr: groups_ru[groupName] as string[],
}));

// console.log('displayGroups_en', displayGroups_en);
// console.log('displayGroups_ru', displayGroups_ru);
