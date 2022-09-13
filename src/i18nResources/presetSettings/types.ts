import { Abilities, Attributes, Profile } from "../../domain";

export type ProfileConfigItem = keyof Profile | {
  name: keyof Profile;
  optionsName?: string;
};

export type ProfileConfig = ProfileConfigItem[][];

export type AttributesConfig = {
  header: 'physical' | 'social' | 'mental';
  items: (keyof Attributes)[]
}[];


export type AbilitiesConfig = {
  header: 'talents' | 'skills' | 'knowledges';
  items: (keyof Abilities)[];
  extension: 'talent' | 'skill' | 'knowledge';
}[];
