import { AttributesConfig } from "../charSheets/commons/domain";

import { CharSheet } from "./charSheet";
import {
  Abilities,
  FreebiePointName,
  Preset,
  Profile,
} from "./combinedDataTypes";

// preset

export interface Limits {
  parameterLimit: number;
  bloodPerTurnLimit: number;
  bloodpool: number;
}

export const presetList: Preset[] = ["vampire_v20", "changeling_v20"];

export type ProfileConfigItem =
  | keyof Profile
  | {
      name: keyof Profile;
      optionsName?: string;
    };

export type ProfileConfig = ProfileConfigItem[][];

export type AbilitiesConfig = {
  header: "talents" | "skills" | "knowledges";
  items: (keyof Abilities)[];
  extension: "talent" | "skill" | "knowledge";
}[];

export type FreebiePointItem = {
  name: FreebiePointName;
  extractor: (charSheet: CharSheet) => number;
  multiplier: number;
};

export type OptionGroup = {
  groupName: string;
  arr: string[];
};

export interface CommonResources {
  backgroundOptions: string[];
  flawOptions: OptionGroup[];
  meritOptions: OptionGroup[];
}

export type Resources = Record<string, string[] | OptionGroup[]>;

export interface PresetSettings {
  displayName: string;
  profileConfig: ProfileConfig;
  attributesConfig: AttributesConfig;
  abilitiesConfig: AbilitiesConfig;
  freebiePointsConfig: FreebiePointItem[];
  resources: Resources;
}
