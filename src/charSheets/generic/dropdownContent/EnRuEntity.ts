import Ajv, { JSONSchemaType } from "ajv";

export interface EnRuEntity {
  en: string;
  ru: string;
}

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

export const enRuEntitySchema: JSONSchemaType<EnRuEntity> = {
  type: "object",
  properties: {
    en: { type: "string" },
    ru: { type: "string" },
  },
  required: ["en", "ru"],
  additionalProperties: false,
};

export const validateEnRuEntity = ajv.compile(enRuEntitySchema);

export function* generateEnRuEntities(
  gen: Generator<string, void, unknown>
): Generator<EnRuEntity, void, unknown> {
  for (let value of gen) {
    const arr = value.split("\n  ");
    const el = JSON.parse(`{ "en": "${arr[0]}", "ru": "${arr[1]}"}`);
    if (!validateEnRuEntity(el)) {
      console.error(
        "Parse resource error",
        el,
        JSON.stringify(validateEnRuEntity.errors, null, "  ")
      );
      throw new Error(
        "Parse resource error: " +
          el +
          ", " +
          JSON.stringify(validateEnRuEntity.errors, null, "  ")
      );
    }
    yield el;
  }
}
