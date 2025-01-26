import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

import { CheckList } from "../vtm/checkListUi";
import { freebiePointsConfig } from "../vtm/presetSettings/freebiePoints";

import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
// import { freebiePointsConfig } from "./presetSettings/freebiePoints";
import { profileConfig } from "./presetSettings/profileConfig";
import { CharSheet } from "./CharSheet";
import { getDropdownOptions } from "./dropdownContent";
import { translateDropdownOptions } from "./dropdownContent/translateDropdownOptions";

export const VtM_v3: Preset = {
  displayName: "VtM Revised",
  profileConfig,
  attributesConfig,
  abilitiesConfig,
  freebiePointsConfig,
  CheckList,
  CharSheet,
  getDropdownOptions,
  translateDropdownOptions,
};
