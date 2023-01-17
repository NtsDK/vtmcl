import {
  // Meta,
  Version,
  // Log,
  Profile,
  Attributes,
  Abilities,
  Disciplines,
  Backgrounds,
  Virtues,
  Merits,
  Flaws,
  State,
  Settings,
  Notes,
  Health,
  AbilitiesExtension,
  Arts,
  Realms,
  Preset,
  CharHistory,
  Goals,
  DisciplinePaths,
  Rituals,
  AlliesAndContacts,
  AppearanceDescription,
  CharacterImage,
  OtherTraits,
  Possessions,
} from "../../domain";

export interface CharSheetData {
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

export interface CharSheetInJson {
  Version: Version;
  Charsheet: CharSheetData;
  Settings: Settings;
}
