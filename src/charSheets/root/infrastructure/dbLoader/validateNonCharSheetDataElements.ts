import { JSONSchemaType } from "ajv";
import { CURRENT_VERSION } from "../../../../constants";
import { Settings, Version } from "../../../misc/domain";
// import { Settings, Version } from "../../charSheets/misc/domain";

// export const logSchema: JSONSchemaType<Log> = {
//   type: "array",
//   items: {
//     type: "array",
//     items: [
//       { type: "string" },
//       { type: "string" },
//       { type: "string" },
//       { type: "string" },
//     ],
//     minItems: 4,
//     maxItems: 4,
//   }
// };

export const versionSchema: JSONSchemaType<Version> = {
  // type: "string",
  type: "string",
  pattern: CURRENT_VERSION,
};

export const settingsSchema: JSONSchemaType<Settings> = {
  type: "object",
  properties: {
    backgroundColor: { type: "string" },
    charsheetBackColor: { type: "string" },
    charsheetBackImage_v2: { type: "string" },
    charsheetBackMode: { type: "string" },
  },
  required: [
    "backgroundColor",
    "charsheetBackColor",
    "charsheetBackImage_v2",
    "charsheetBackMode",
  ],
  additionalProperties: false,
};

// export const metaSchema: JSONSchemaType<Meta> = {
//   type: "object",
//   properties: {
//     "name":       {type: "string"},
//     "date":     {type: "string"},
//     "preGameDate":   {type: "string"},
//     "description":     {type: "string"},
//     "saveTime":     {type: "string"},
//   },
//   required: [
//     "name",
//     "date",
//     "preGameDate",
//     "description",
//     "saveTime",
//   ],
//   additionalProperties: false,
// };
