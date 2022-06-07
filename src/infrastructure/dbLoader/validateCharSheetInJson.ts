import Ajv, { JSONSchemaType } from "ajv";
import { CharSheetInJson } from "./types";
import { 
  logSchema,
  metaSchema,
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
    "Meta":       metaSchema,
    "Version":    versionSchema,
    "Log":        logSchema,
    "Charsheet":  charSheetDataSchema,
    "Settings":   settingsSchema,
  },
  required: [
    "Meta",
    "Version",
    "Log",
    "Charsheet",
    "Settings",
  ],
  additionalProperties: false,
};


export const validateCharSheetInJson = ajv.compile(charSheetInJsonSchema);