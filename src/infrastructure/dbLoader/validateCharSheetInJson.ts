import Ajv, { JSONSchemaType } from "ajv";
import { CharSheetInJson } from "./types";
import {
  settingsSchema,
  versionSchema,
} from "./validateNonCharSheetDataElements";
import { charSheetDataSchema } from "./validateCharSheetData";

const ajv = new Ajv({
  allErrors: true,
  // removeAdditional: true,
  // useDefaults: true
});

export const charSheetInJsonSchema: JSONSchemaType<CharSheetInJson> = {
  type: "object",
  properties: {
    Version: versionSchema,
    Charsheet: charSheetDataSchema,
    Settings: settingsSchema,
  },
  required: ["Version", "Charsheet", "Settings"],
  additionalProperties: false,
};

export const validateCharSheetInJson = ajv.compile(charSheetInJsonSchema);
