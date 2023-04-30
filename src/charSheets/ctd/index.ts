import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

import { CheckList } from "./checkListUi";
import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
import { freebiePointsConfig } from "./presetSettings/freebiePoints";
import { profileConfig } from "./presetSettings/profileConfig";
import { CharSheet } from "./CharSheet";
import { getDropdownOptions } from "./dropdownContent";
import { translateDropdownOptions } from "./dropdownContent/translateDropdownOptions";

export const CtD: Preset = {
  displayName: "CtD V20",
  attributesConfig,
  abilitiesConfig,
  freebiePointsConfig,
  profileConfig,
  CheckList,
  CharSheet,
  getDropdownOptions,
  translateDropdownOptions,
};
