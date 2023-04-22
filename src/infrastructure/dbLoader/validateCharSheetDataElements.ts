import Ajv, { JSONSchemaType } from "ajv";
import { Arts, Realms } from "../../charSheets/ctd/domain";
import {
  Virtues,
  Disciplines,
  DisciplinePaths,
  Rituals,
} from "../../charSheets/vtm/domain";
import {
  Profile,
  // Abilities,
  Attributes,
  Backgrounds,
  Flaws,
  Merits,
  Health,
  Notes,
  State,
  Preset,
} from "../../domain";

export const notesSchema: JSONSchemaType<Notes> = {
  type: "string",
};
export const charHistorySchema = notesSchema;
export const goalsSchema = notesSchema;
export const appearanceDescriptionSchema = notesSchema;
export const characterImageSchema = notesSchema;
export const alliesAndContactsSchema = notesSchema;
export const possessionsSchema = notesSchema;

export const presetSchema: JSONSchemaType<Preset> = {
  type: "string",
  enum: ["vampire_v20", "changeling_v20"],
};

export const profileSchema: JSONSchemaType<Profile> = {
  type: "object",
  properties: {
    name: { type: "string" },
    player: { type: "string" },
    chronicle: { type: "string" },
    nature: { type: "string" },
    age: { type: "string" },
    sex: { type: "string" },
    demeanor: { type: "string" },
    concept: { type: "string" },
    clan: { type: "string" },
    generation: { type: "string" },
    sire: { type: "string" },

    court: { type: "string" },
    house: { type: "string" },
    kith: { type: "string" },
    primaryLegacy: { type: "string" },
    secondaryLegacy: { type: "string" },
    motley: { type: "string" },
    seeming: { type: "string" },
  },
  required: [
    "name",
    "player",
    "chronicle",
    "nature",
    "age",
    "sex",
    "demeanor",
    "concept",
    "clan",
    "generation",
    "sire",

    "court",
    "house",
    "kith",
    "primaryLegacy",
    "secondaryLegacy",
    "motley",
    "seeming",
  ],
  additionalProperties: false,
};

export const attributesSchema: JSONSchemaType<Attributes> = {
  type: "object",
  properties: {
    strength: { type: "number" },
    dexterity: { type: "number" },
    stamina: { type: "number" },
    charisma: { type: "number" },
    manipulation: { type: "number" },
    appearance: { type: "number" },
    perception: { type: "number" },
    intelligence: { type: "number" },
    wits: { type: "number" },
  },
  required: [
    "strength",
    "dexterity",
    "stamina",
    "charisma",
    "manipulation",
    "appearance",
    "perception",
    "intelligence",
    "wits",
  ],
  additionalProperties: false,
};

export const virtuesSchema: JSONSchemaType<Virtues> = {
  type: "object",
  properties: {
    conscience: { type: "number" },
    self_control: { type: "number" },
    courage: { type: "number" },
  },
  required: ["conscience", "self_control", "courage"],
  additionalProperties: false,
};

export const realmsSchema: JSONSchemaType<Realms> = {
  type: "object",
  properties: {
    actor: { type: "number" },
    fae: { type: "number" },
    nature: { type: "number" },
    prop: { type: "number" },
    scene: { type: "number" },
    time: { type: "number" },
  },
  required: ["actor", "fae", "nature", "prop", "scene", "time"],
  additionalProperties: false,
};

export const healthSchema: JSONSchemaType<Health> = {
  type: "object",
  properties: {
    bruised: { type: "number" },
    hurt: { type: "number" },
    injured: { type: "number" },
    wounded: { type: "number" },
    mauled: { type: "number" },
    crippled: { type: "number" },
    incapacitated: { type: "number" },
  },
  required: [
    "bruised",
    "hurt",
    "injured",
    "wounded",
    "mauled",
    "crippled",
    "incapacitated",
  ],
  additionalProperties: false,
};

export const stateSchema: JSONSchemaType<State> = {
  type: "object",
  properties: {
    humanity: { type: "number" },
    pathName: { type: "string" },
    bearingName: { type: "string" },
    bearingModifier: { type: "string" },

    willpowerRating: { type: "number" },
    willpowerPool: { type: "number" },

    bloodpool: { type: "number" },
    bloodPerTurn: { type: "string" },

    weakness: { type: "string" },
    experience: { type: "string" },

    antithesis: { type: "string" },
    thresholds: { type: "string" },
    birthrightsFrailties: { type: "string" },
    glamourRating: { type: "number" },
    glamourPool: { type: "number" },
    banalityRating: { type: "number" },
    banalityPool: { type: "number" },
    nightmare: { type: "number" },
  },
  required: [
    "humanity",
    "pathName",
    "bearingName",
    "bearingModifier",
    "willpowerRating",
    "willpowerPool",
    "bloodpool",
    "bloodPerTurn",
    "weakness",
    "experience",
    "antithesis",
    "thresholds",
    "birthrightsFrailties",
    "glamourRating",
    "glamourPool",
    "banalityRating",
    "banalityPool",
    "nightmare",
  ],
  additionalProperties: false,
};

const stringNumberArrSchema: JSONSchemaType<
  Backgrounds & Disciplines & DisciplinePaths & Arts
> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      value: { type: "number" },
    },
    required: ["name", "value"],
  },
};

export const disciplinesSchema = stringNumberArrSchema;
export const backgroundsSchema = stringNumberArrSchema;
export const disciplinePathsSchema = stringNumberArrSchema;
export const artsSchema = stringNumberArrSchema;
export const otherTraitsSchema = stringNumberArrSchema;

export const ritualsSchema: JSONSchemaType<Rituals> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      level: { type: "string" },
    },
    required: ["name", "level"],
  },
};

const stringArraySchema: JSONSchemaType<Flaws & Merits> = {
  type: "array",
  items: {
    type: "string",
  },
};

export const meritsSchema = stringArraySchema;
export const flawsSchema = stringArraySchema;
