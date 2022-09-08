import { ProfileConfig } from "../../domain";
import { usePreset } from "../../services/storageAdapter";

export const profileConfig_v20: ProfileConfig = [[
  'name',
  'player',
  'chronicle',
  'age',
  'sex'
], [
  {
    name: 'nature',
    optionsName: 'archetypeOptions'
  },
  {
    name: 'demeanor',
    optionsName: 'archetypeOptions'
  },
  'concept',
  {
    name: 'clan',
    optionsName: 'clanOptions'
  },
  {
    name: 'generation',
    optionsName: 'generationOptions'
  },
  'sire'
]
];

export function usePresetSettings() {

  const { preset } = usePreset();

  return preset === 'vampire_v20'
    ? {
        profileConfig: profileConfig_v20
      }
    : {
        profileConfig: profileConfig_v20
      }
}
