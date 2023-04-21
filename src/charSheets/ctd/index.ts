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
import { useCtDResource } from "./dropdownContent";
import { translateCtDCharsheetContentI18n } from "./dropdownContent/useCharsheetContentI18n";

export const CtD = {
  abilitiesConfig,
  knowledgesArr,
  skillsArr,
  talentsArr,
  freePointsConfig,
  profileConfig,
  CheckList,
  CharSheet,
  useCtDResource,
  translateCtDCharsheetContentI18n,
};
