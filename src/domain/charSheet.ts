import { AbilitiesExtension } from "../charSheets/commons/domain";

import { Abilities } from "./abilities";
import {
  AlliesAndContacts,
  AppearanceDescription,
  Arts,
  Attributes,
  Backgrounds,
  CharacterImage,
  CharHistory,
  DisciplinePaths,
  Disciplines,
  Flaws,
  Goals,
  Health,
  Merits,
  Notes,
  OtherTraits,
  Possessions,
  Profile,
  Realms,
  Rituals,
  State,
  Virtues,
} from "./characterDataTypes";
import { Settings, Version } from "./nonCharacterDataTypes";
import { Preset } from "./presets";

export interface CharSheet {
  Version: Version;
  settings: Settings;
  preset: Preset;
  profile: Profile;
  attributes: Attributes;
  abilities: Abilities;
  abilitiesExtension: AbilitiesExtension;
  disciplines: Disciplines;
  disciplinePaths: DisciplinePaths;
  rituals: Rituals;
  backgrounds: Backgrounds;
  virtues: Virtues;
  merits: Merits;
  flaws: Flaws;
  state: State;
  health: Health;
  healthChimerical: Health;
  notes: Notes;
  charHistory: CharHistory;
  goals: Goals;
  otherTraits: OtherTraits;
  appearanceDescription: AppearanceDescription;
  characterImage: CharacterImage;
  alliesAndContacts: AlliesAndContacts;
  possessions: Possessions;

  arts: Arts;
  realms: Realms;
}
