import Ajv, { JSONSchemaType } from "ajv";
import { CharSheetData } from "./types";
import { 
  attributesSchema,
  backgroundsSchema,
  disciplinesSchema,
  flawsSchema,
  meritsSchema,
  notesSchema,
  profileSchema,
  stateSchema,
  healthSchema,
  virtuesSchema,
} from "./validateCharSheetDataElements";
import { abilitiesSchema } from "./abilitiesSchema";

export const charSheetDataSchema: JSONSchemaType<CharSheetData> = {
  type: "object",
  properties: {
    "profile":       profileSchema,
    "attributes":     attributesSchema,
    "abilities":  abilitiesSchema,
    "disciplines":     disciplinesSchema,
    "backgrounds":        backgroundsSchema,
    "virtues":        virtuesSchema,
    "merits":   meritsSchema,
    "flaws":    flawsSchema,
    "state":       stateSchema,
    "health": healthSchema,
    "notes": notesSchema,
  },
  required: [
    "profile",
    "attributes",
    "abilities",
    "disciplines",
    "backgrounds",
    "virtues",
    "merits",
    "flaws",
    "state",
    "health",
    "notes",
  ],
  additionalProperties: false,
};
