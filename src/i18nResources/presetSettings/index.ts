import { usePreset } from "../../services/storageAdapter";
import { attributesConfig } from "./attributesConfig";
import { changelingAbilitiesConfig } from "./changelingAbilitiesConfig";
import { changelingProfileConfig } from "./changelingProfileConfig";
import { vampireAbilitiesConfig } from "./vampireAbilitiesConfig";
import { vampireProfileConfig } from "./vampireProfileConfig";
export * from './types';

export function usePresetSettings() {

  const { preset } = usePreset();

  return preset === 'vampire_v20'
    ? {
        profileConfig: vampireProfileConfig,
        attributesConfig,
        abilitiesConfig: vampireAbilitiesConfig,
      }
    : {
        profileConfig: changelingProfileConfig,
        attributesConfig,
        abilitiesConfig: changelingAbilitiesConfig,
      }
}
