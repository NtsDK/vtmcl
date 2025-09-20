import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

// import { CheckList } from "./checkListUi";
import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
import { freebiePointsConfig } from "./presetSettings/freebiePoints";
import { profileConfig } from "./presetSettings/profileConfig";
import { CharSheet } from "./CharSheet";
import { CheckList } from "./checkListUi";
import { getDropdownOptions } from "./dropdownContent";
import { translateDropdownOptions } from "./dropdownContent/translateDropdownOptions";

export * from "./CharSheet";

export const MtA: Preset = {
  displayName: "MtA V20",
  profileConfig,
  attributesConfig,
  abilitiesConfig,

  CharSheet,
  freebiePointsConfig,
  getDropdownOptions,
  translateDropdownOptions,
  CheckList,
};
