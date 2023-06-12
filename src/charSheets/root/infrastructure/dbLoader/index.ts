import { CharSheet } from "../../domain";
import { migrate } from "../../domainServices";

import { charSheetFromJson } from "./utils";
import { validateCharSheetInJson } from "./validateCharSheetInJson";

export * from "./validateCharSheetInJson";

export * from "./types";

export * from "./utils";

export function strToCharSheet(str: string): CharSheet {
  try {
    const dbObj = JSON.parse(str);
    if (!validateCharSheetInJson(dbObj)) {
      try {
        const database3 = migrate(dbObj);
        if (!validateCharSheetInJson(database3)) {
          console.error(
            "errors.error-on-file-loading",
            dbObj,
            JSON.stringify(validateCharSheetInJson.errors, null, "  ")
          );
          throw new Error(
            "Ошибка в мигрированной версии листа персонажа " +
              JSON.stringify(validateCharSheetInJson.errors, null, "  ")
          );
        }

        return charSheetFromJson(database3);
      } catch (error) {
        console.error("errors.error-on-file-loading", dbObj, error);
        throw new Error(
          "Ошибка в мигрированной версии листа персонажа " +
            JSON.stringify(validateCharSheetInJson.errors, null, "  ")
        );
      }
    }
    return charSheetFromJson(dbObj);
  } catch (error) {
    console.log("Ошибка разбора данных", str, error);
    throw new Error(
      "Ошибка разбора данных" + JSON.stringify(error, null, "  ")
    );
  }
}
