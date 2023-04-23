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
} from "../../generic/domain";
import { Arts, Realms } from "../../ctd/domain";
import { Settings, Version } from "../../misc/domain";
import {
  Disciplines,
  DisciplinePaths,
  Rituals,
  Virtues,
} from "../../vtm/domain";

import { Profile, State, Abilities, Preset } from "./combinedDataTypes";

export interface CharSheet {
  // root
  preset: Preset;

  // misc
  Version: Version;
  settings: Settings;

  // generic
  profile: Profile;
  attributes: Attributes;
  abilities: Abilities;
  abilitiesExtension: AbilitiesExtension;
  state: State;
  health: Health;
  backgrounds: Backgrounds;
  merits: Merits;
  flaws: Flaws;
  notes: Notes;
  charHistory: CharHistory;
  goals: Goals;
  otherTraits: OtherTraits;
  appearanceDescription: AppearanceDescription;
  characterImage: CharacterImage;
  alliesAndContacts: AlliesAndContacts;
  possessions: Possessions;

  // vtm
  disciplines: Disciplines;
  disciplinePaths: DisciplinePaths;
  rituals: Rituals;
  virtues: Virtues;

  // ctd
  healthChimerical: Health;
  arts: Arts;
  realms: Realms;
}
