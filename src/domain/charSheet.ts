import {
  AbilitiesExtension,
  AlliesAndContacts,
  AppearanceDescription,
  Attributes,
  Backgrounds,
  CharacterImage,
  CharHistory,
  Flaws,
  Goals,
  Health,
  Merits,
  Notes,
  OtherTraits,
  Possessions,
} from "../charSheets/commons/domain";
import { Arts, Realms } from "../charSheets/ctd/domain";
import { Settings, Version } from "../charSheets/meta/domain";
import {
  Disciplines,
  DisciplinePaths,
  Rituals,
  Virtues,
} from "../charSheets/vtm/domain";

import { Profile, State, Abilities, Preset } from "./combinedDataTypes";

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
