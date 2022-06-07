import { LS_KEY } from "../../constants";
import { CharSheet } from "../../domain/charSheet";
import { 
  charSheetFromJson, 
  charSheetToJson, 
  validateCharSheetInJson 
} from "../dbLoader";

export function saveCharSheetInLS(charSheet: CharSheet): void {
  const serverDbForJson = charSheetToJson(charSheet);
  localStorage.setItem(LS_KEY, JSON.stringify(serverDbForJson));
}

export function getCharSheetFromLS(): CharSheet | null {
  const str = localStorage.getItem(LS_KEY);
  if (str === null) {
    return null;
  }
  try {
    const dbObj = JSON.parse(str);
    if (!validateCharSheetInJson(dbObj)) {
      console.log('Ошибка разбора данных из local storage', dbObj, validateCharSheetInJson.errors);
      return null;
    }
    return charSheetFromJson(dbObj);
  } catch(error) {
    console.log('Ошибка разбора данных из local storage 2', str, error);
  }
  return null;
}