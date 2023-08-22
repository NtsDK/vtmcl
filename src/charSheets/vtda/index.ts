import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

import { CheckList } from "./checkListUi";
import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
import { freebiePointsConfig } from "./presetSettings/freebiePoints";
import { profileConfig } from "./presetSettings/profileConfig";
import { CharSheet } from "./CharSheet";
import { getDropdownOptions } from "./dropdownContent";
import { translateDropdownOptions } from "./dropdownContent/translateDropdownOptions";

export const VtDA: Preset = {
  displayName: "VtDA V20",
  profileConfig,
  attributesConfig,
  abilitiesConfig,
  freebiePointsConfig,
  CheckList,
  CharSheet,
  getDropdownOptions,
  translateDropdownOptions,
};
