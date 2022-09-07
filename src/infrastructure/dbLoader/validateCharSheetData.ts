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
  artsSchema,
  realmsSchema,
} from "./validateCharSheetDataElements";
import {
  abilitiesSchema,
  abilitiesExtensionSchema,
} from "./abilitiesSchema";

export const charSheetDataSchema: JSONSchemaType<CharSheetData> = {
  type: "object",
  properties: {
    profile:      profileSchema,
    attributes:   attributesSchema,
    abilities:    abilitiesSchema,
    abilitiesExtension: abilitiesExtensionSchema,
    disciplines:  disciplinesSchema,
    backgrounds:  backgroundsSchema,
    virtues:      virtuesSchema,
    merits:       meritsSchema,
    flaws:        flawsSchema,
    state:        stateSchema,
    health:       healthSchema,
    notes:        notesSchema,
    arts:         artsSchema,
    realms:       realmsSchema,
  },
  required: [
    "profile",
    "attributes",
    "abilities",
    "abilitiesExtension",
    "disciplines",
    "backgrounds",
    "virtues",
    "merits",
    "flaws",
    "state",
    "health",
    "notes",
    "arts",
    "realms",
  ],
  additionalProperties: false,
};
