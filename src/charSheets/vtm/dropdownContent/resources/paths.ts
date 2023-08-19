import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

import { pathsSource } from "./pathsSource";

import {
  generateSequence,
  makeTranslateFunction,
  sortStrArr,
} from "../../../generic/dropdownContent";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

type PathGroupName = "common" | "v20-core" | "v20-addon" | "revised" | "vtda";

interface PathEntity {
  en: string;
  ru: string;
  groupName: PathGroupName;
}

export const pathEntitySchema: JSONSchemaType<PathEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
    groupName: {
      type: "string",
      enum: ["common", "v20-core", "v20-addon", "revised", "vtda"],
    },
  },
  required: ["en", "ru", "groupName"],
  additionalProperties: false,
};

export const validatePathEntity = ajv.compile(pathEntitySchema);

export function* generatePathEntities(
  gen: Generator<string, void, unknown>
): Generator<PathEntity, void, unknown> {
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

    if (!validatePathEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validatePathEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validatePathEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}

const sourceArr = [...generatePathEntities(generateSequence(3, pathsSource))];

export const translatePath = makeTranslateFunction(sourceArr);

const groups = R.groupBy(R.prop("groupName"), sourceArr) as Record<
  PathGroupName,
  PathEntity[]
>;

const paths_v20 = [...groups["v20-core"], ...groups["v20-addon"]];

export const paths_en = [
  groups.common[0].en,
  ...sortStrArr(R.pluck("en", paths_v20)),
];

export const paths_ru = [
  groups.common[0].ru,
  ...sortStrArr(R.pluck("ru", paths_v20)),
];
