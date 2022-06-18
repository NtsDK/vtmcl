import Ajv, { JSONSchemaType } from "ajv";
import { 
  Meta,
  Log,
  Version,
  Settings
} from "../../domain";
import { CURRENT_VERSION } from "../../constants";

export const logSchema: JSONSchemaType<Log> = {
  type: "array",
  items: {
    type: "array",
    items: [
      { type: "string" },
      { type: "string" },
      { type: "string" },
      { type: "string" },
    ],
    minItems: 4,
    maxItems: 4,
  }
};

export const versionSchema: JSONSchemaType<Version> = {
  // type: "string",
  type: "string",
  pattern: CURRENT_VERSION
};

export const settingsSchema: JSONSchemaType<Settings> = {
  type: "object",
  properties: {
    "backgroundColor":       {type: "string"},
    "charsheetBackColor":     {type: "string"},
    "charsheetBackImage":   {type: "string"},
    "charsheetBackMode":     {type: "string"},
  },
  required: [
    "backgroundColor",
    "charsheetBackColor",
    "charsheetBackImage",
    "charsheetBackMode",
  ],
  additionalProperties: false,
};

export const metaSchema: JSONSchemaType<Meta> = {
  type: "object",
  properties: {
    "name":       {type: "string"},
    "date":     {type: "string"},
    "preGameDate":   {type: "string"},
    "description":     {type: "string"},
    "saveTime":     {type: "string"},
  },
  required: [
    "name",
    "date",
    "preGameDate",
    "description",
    "saveTime",
  ],
  additionalProperties: false,
};
