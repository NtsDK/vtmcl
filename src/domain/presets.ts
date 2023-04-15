import { Abilities } from "./abilities";
import { Attributes, Profile } from "./characterDataTypes";
import { CharSheet } from "./charSheet";

// preset
export type Preset = "vampire_v20" | "changeling_v20";

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

export type AttributesConfig = {
  header: "physical" | "social" | "mental";
  items: (keyof Attributes)[];
}[];

export type AbilitiesConfig = {
  header: "talents" | "skills" | "knowledges";
  items: (keyof Abilities)[];
  extension: "talent" | "skill" | "knowledge";
}[];

type FreePointName =
  // common
  | "attribute"
  | "ability"
  | "background"
  | "willpower"
  // vampire
  | "discipline"
  | "virtue"
  | "humanity"
  // changeling
  | "art"
  | "realm"
  | "glamour";

export type FreePointItem = {
  name: FreePointName;
  extractor: (charSheet: CharSheet) => number;
  multiplier: number;
};

export interface PresetSettings {
  profileConfig: ProfileConfig;
  attributesConfig: AttributesConfig;
  abilitiesConfig: AbilitiesConfig;
  freePointsConfig: FreePointItem[];
}
