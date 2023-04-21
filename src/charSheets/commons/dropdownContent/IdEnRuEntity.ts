import Ajv, { JSONSchemaType } from "ajv";
import * as R from "ramda";

export interface IdEnRuEntity {
  id: string;
  en: string;
  ru: string;
}

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

export const idEnRuEntitySchema: JSONSchemaType<IdEnRuEntity> = {
  type: "object",
  properties: {
    id: { type: "string" },
    en: { type: "string" },
    ru: { type: "string" },
  },
  required: ["id", "en", "ru"],
  additionalProperties: false,
};

export const validateIdEnRuEntity = ajv.compile(idEnRuEntitySchema);

export function* generateIdEnRuEntities(
  gen: Generator<string, void, unknown>
): Generator<IdEnRuEntity, void, unknown> {
  for (let value of gen) {
    const arr = value.split("\n").map(R.trim);
    const el = JSON.parse(
      `{ "id": "${arr[0]}", "en": "${arr[1]}", "ru": "${arr[2]}"}`
    );
    if (!validateIdEnRuEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateIdEnRuEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateIdEnRuEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}
