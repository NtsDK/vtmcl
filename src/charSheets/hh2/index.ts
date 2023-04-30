import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

import { CharSheet } from "./CharSheet";
import { profileConfig } from "./presetSettings/profileConfig";
import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
// import { CheckList } from "./checkListUi";
// import { freebiePointsConfig } from "./presetSettings/freebiePoints";
// import { useCtDResource } from "./dropdownContent";
// import { translateCtDCharsheetContentI18n } from "./dropdownContent/useCharsheetContentI18n";

export const HH2: Preset = {
  displayName: "HH2 V20",
  attributesConfig,
  profileConfig,
  abilitiesConfig,

  CharSheet,
  // freebiePointsConfig,
  // CheckList,
  // useCtDResource,
  // translateCtDCharsheetContentI18n,
};
