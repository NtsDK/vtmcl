import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import {
  generateIdEnRuEntities,
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

import { sectsSource, factionsSource } from "./sectsSource";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type FactionName = "traditions" | "technocracy" | "disparates";

interface SectEntity {
  en: string;
  ru: string;
  factionName: FactionName;
}

export const sectEntitySchema: JSONSchemaType<SectEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    factionName: {
      type: "string",
      enum: ["traditions", "technocracy", "disparates"],
    },
  },
  required: ["en", "ru", "factionName"],
  additionalProperties: false,
};

export const validateSectEntity = ajv.compile(sectEntitySchema);

export function* generateSectEntities(
  gen: Generator<string, void, unknown>,
): Generator<SectEntity, void, unknown> {
  for (let value of gen) {
    const [enLine, ruLine, factionLine] = value.split("\n");
    const groupSeparators = /[[\]]/g;
    const factionName = factionLine
      .split(groupSeparators)
      .map(R.trim)
      .filter((el) => el !== "");
    const el = {
      en: enLine.trim(),
      ru: ruLine.trim(),
      factionName: factionName[0],
    };

    if (!validateSectEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateSectEntity.errors, null, "  "),
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateSectEntity.errors, null, "  "),
      );
    }
    yield el;
  }
}

const sourceArr = [...generateSectEntities(generateSequence(3, sectsSource))];

export const translateSect = makeTranslateFunction(sourceArr);

const factions = R.groupBy(R.prop("factionName"), sourceArr);

const factionGroups_en = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("en", value));
}, factions);

const factionGroups_ru = R.mapObjIndexed((value) => {
  return sortStrArr(R.pluck("ru", value));
}, factions);

const groupOrder: FactionName[] = ["traditions", "technocracy", "disparates"];

const factionsArr = [
  ...generateIdEnRuEntities(generateSequence(3, factionsSource)),
];

const factionIndex = R.indexBy(R.prop("id"), factionsArr);

export const sectDisplayGroups_en = groupOrder.map((groupName) => ({
  groupName: factionIndex[groupName].en,
  arr: factionGroups_en[groupName] as string[],
}));

export const sectDisplayGroups_ru = groupOrder.map((groupName) => ({
  groupName: factionIndex[groupName].ru,
  arr: factionGroups_ru[groupName] as string[],
}));

export const factions_en: string[] = R.pluck("en", factionsArr);

export const factions_ru: string[] = R.pluck("ru", factionsArr);

export const translateFaction = makeTranslateFunction(factionsArr);
