import { AttributesConfig } from "../../generic/domain";

import { CharSheet } from "./charSheet";
import {
  Abilities,
  FreebiePointName,
  PresetName,
  Profile,
} from "./combinedDataTypes";

// preset

export interface Limits {
  parameterLimit: number;
  bloodPerTurnLimit: number;
  bloodpool: number;
}

export const presetList: PresetName[] = [
  "vampire_v20",
  "changeling_v20",
  "hunter_v20",
];

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

export type OptionItem = string;

export type OptionGroup = {
  groupName: string;
  arr: OptionItem[];
};

export type CommonDropdownOptions = {
  backgroundOptions: OptionItem[];
  flawOptions: OptionGroup[];
  meritOptions: OptionGroup[];
};

export type Options = OptionItem[] | OptionGroup[];

export type DropdownOptions = Record<string, Options>;

export interface PresetSettings {
  displayName: string;
  profileConfig: ProfileConfig;
  attributesConfig: AttributesConfig;
  abilitiesConfig: AbilitiesConfig;
  dropdownOptions?: DropdownOptions;
}
