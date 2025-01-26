import {
  AbilitiesConfig,
  AttributesConfig,
  ProfileConfig,
  DropdownOptions,
  FreebiePointsConfig,
} from "./root/domain";
import { StateStore } from "./root/services/store";

export type Preset = {
  displayName: string;
  profileConfig: ProfileConfig;
  attributesConfig: AttributesConfig;
  abilitiesConfig: AbilitiesConfig;

  freebiePointsConfig?: FreebiePointsConfig;
  dropdownOptions?: DropdownOptions;

  CharSheet: (props: {}) => JSX.Element;
  CheckList?: (props: {}) => JSX.Element;
  translateDropdownOptions?: (
    store: StateStore,
    prevLanguage: string,
    lng: string,
  ) => void;
  getDropdownOptions?(language: string): DropdownOptions;
};

export type ExternalPresetProps = Pick<
  Preset,
  "CharSheet" | "CheckList" | "freebiePointsConfig"
>;
