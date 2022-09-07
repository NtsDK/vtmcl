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
} from "../../domain";

export interface CharSheetData {
  preset: Preset;
  profile: Profile;
  attributes: Attributes;
  abilities: Abilities;
  abilitiesExtension: AbilitiesExtension;
  disciplines: Disciplines;
  backgrounds: Backgrounds;
  virtues: Virtues;
  merits: Merits;
  flaws: Flaws;
  state: State;
  health: Health;
  healthChimerical: Health;
  notes: Notes;
  arts: Arts;
  realms: Realms;
}

export interface CharSheetInJson {
  Version: Version;
  Charsheet: CharSheetData;
  Settings: Settings;
}
