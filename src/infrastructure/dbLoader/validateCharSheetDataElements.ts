import Ajv, { JSONSchemaType } from "ajv";
import { 
  Profile,
  // Abilities,
  Attributes,
  Backgrounds,
  Disciplines,
  Flaws,
  Merits,
  Health,
  Notes,
  Virtues,
  State
} from "../../domain";


export const notesSchema: JSONSchemaType<Notes> = {
  type: "string",
};

export const profileSchema: JSONSchemaType<Profile> = {
  type: "object",
  properties: {
    "name":       {type: "string"},
    "player":     {type: "string"},
    "chronicle":  {type: "string"},
    "nature":     {type: "string"},
    "age":        {type: "string"},
    "sex":        {type: "string"},
    "demeanor":   {type: "string"},
    "concept":    {type: "string"},
    "clan":       {type: "string"},
    "generation": {type: "string"},
    "sire":       {type: "string"},
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
  ],
  additionalProperties: false,
};

export const attributesSchema: JSONSchemaType<Attributes> = {
  type: "object",
  properties: {
    "strength":       {type: "number"},
    "dexterity":       {type: "number"},
    "stamina":       {type: "number"},
    "charisma":       {type: "number"},
    "manipulation":       {type: "number"},
    "appearance":       {type: "number"},
    "perception":       {type: "number"},
    "intelligence":       {type: "number"},
    "wits":       {type: "number"},
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
    "conscience":   {type: "number"},
    "self_control": {type: "number"},
    "courage":      {type: "number"},
  },
  required: [
    "conscience",
    "self_control",
    "courage",
  ],
  additionalProperties: false,
};

export const healthSchema: JSONSchemaType<Health> = {
  type: "object",
  properties: {
    "bruised":   {type: "number"},
    "hurt":   {type: "number"},
    "injured":   {type: "number"},
    "wounded":   {type: "number"},
    "mauled":   {type: "number"},
    "crippled":   {type: "number"},
    "incapacitated":   {type: "number"},
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
    "humanity":   {type: "number"},
    "willpower": {type: "number"},
    "bloodpool":      {type: "number"},
    "willpower2":      {type: "number"},
  },
  required: [
    "humanity",
    "willpower",
    "bloodpool",
    "willpower2",
  ],
  additionalProperties: false,
};

const stringNumberArrSchema: JSONSchemaType<Backgrounds & Disciplines> = {
  type: "array",
  items: {
    type: 'object',
    properties: {
      name: { type: 'string'},
      value: { type: 'number'},
    },
    required: ['name', 'value']
  },
};

export const disciplinesSchema = stringNumberArrSchema;
export const backgroundsSchema = stringNumberArrSchema;

const stringArraySchema: JSONSchemaType<Flaws & Merits> = {
  type: "array",
  items: {
    type: 'string'
  }
};

export const meritsSchema = stringArraySchema;
export const flawsSchema = stringArraySchema;