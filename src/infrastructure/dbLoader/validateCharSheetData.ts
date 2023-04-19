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
  presetSchema,
  charHistorySchema,
  goalsSchema,
  disciplinePathsSchema,
  ritualsSchema,
  otherTraitsSchema,
  alliesAndContactsSchema,
  appearanceDescriptionSchema,
  characterImageSchema,
  possessionsSchema,
} from "./validateCharSheetDataElements";
import { abilitiesSchema, abilitiesExtensionSchema } from "./abilitiesSchema";

export const charSheetDataSchema: JSONSchemaType<CharSheetData> = {
  type: "object",
  properties: {
    preset: presetSchema,
    profile: profileSchema,
    attributes: attributesSchema,
    abilities: abilitiesSchema,
    abilitiesExtension: abilitiesExtensionSchema,
    disciplines: disciplinesSchema,
    disciplinePaths: disciplinePathsSchema,
    otherTraits: otherTraitsSchema,
    rituals: ritualsSchema,
    backgrounds: backgroundsSchema,
    virtues: virtuesSchema,
    merits: meritsSchema,
    flaws: flawsSchema,
    state: stateSchema,
    health: healthSchema,
    healthChimerical: healthSchema,
    notes: notesSchema,
    charHistory: charHistorySchema,
    goals: goalsSchema,
    alliesAndContacts: alliesAndContactsSchema,
    appearanceDescription: appearanceDescriptionSchema,
    characterImage: characterImageSchema,
    possessions: possessionsSchema,
    arts: artsSchema,
    realms: realmsSchema,
  },
  required: [
    "preset",
    "profile",
    "attributes",
    "abilities",
    "abilitiesExtension",
    "disciplines",
    "disciplinePaths",
    "rituals",
    "backgrounds",
    "virtues",
    "merits",
    "flaws",
    "state",
    "health",
    "healthChimerical",
    "notes",
    "charHistory",
    "goals",
    "arts",
    "realms",
    "otherTraits",
    "appearanceDescription",
    "characterImage",
    "alliesAndContacts",
    "possessions",
  ],
  additionalProperties: false,
};
