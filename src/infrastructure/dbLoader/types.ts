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
} from "../../domain";

export interface CharSheetData {
  "profile": Profile;
  "attributes": Attributes;
  "abilities": Abilities;
  "abilitiesExtension": AbilitiesExtension;
  "disciplines": Disciplines;
  "backgrounds": Backgrounds;
  "virtues": Virtues;
  "merits": Merits;
  "flaws": Flaws;
  "state": State;
  "health": Health;
  "notes": Notes;
}

export interface CharSheetInJson {
  Version: Version;
  Charsheet: CharSheetData;
  Settings: Settings;
}
