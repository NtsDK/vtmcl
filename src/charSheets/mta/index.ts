import { attributesConfig } from "../generic/presetSettings";
import { Preset } from "../types";

// import { CheckList } from "./checkListUi";
import { abilitiesConfig } from "./presetSettings/abilitiesConfig";
// import { freebiePointsConfig } from "./presetSettings/freebiePoints";
import { profileConfig } from "./presetSettings/profileConfig";

export * from "./CharSheet";
import { CharSheet } from "./CharSheet";

export const MtA: Preset = {
    displayName: "MtA V20",
    profileConfig,
    attributesConfig,
    abilitiesConfig,

    CharSheet

    //   freebiePointsConfig?: FreebiePointsConfig;
    //   dropdownOptions?: DropdownOptions;

    //   CheckList?: (props: {}) => JSX.Element;
    //   translateDropdownOptions?: (
    //     store: StateStore,
    //     prevLanguage: string,
    //     lng: string,
    //   ) => void;
    //   getDropdownOptions?(language: string): DropdownOptions;
}
