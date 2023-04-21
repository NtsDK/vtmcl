import { CheckList } from "./checkListUi";
import {
  abilitiesConfig,
  knowledgesArr,
  skillsArr,
  talentsArr,
} from "./presetSettings/abilitiesConfig";
import { freePointsConfig } from "./presetSettings/freePoints";
import { profileConfig } from "./presetSettings/profileConfig";
import { CharSheet } from "./CharSheet";
import { useVtMResource } from "./dropdownContent";
import { translateVtMCharsheetContentI18n } from "./dropdownContent/useCharsheetContentI18n";

export const VtM = {
  abilitiesConfig,
  knowledgesArr,
  skillsArr,
  talentsArr,
  freePointsConfig,
  profileConfig,
  CheckList,
  CharSheet,
  useVtMResource,
  translateVtMCharsheetContentI18n,
};
