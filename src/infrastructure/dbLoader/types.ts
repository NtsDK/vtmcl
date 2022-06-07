import { 
  Meta, 
  Version, 
  Log, 
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
} from "../../domain";

export interface CharSheetData {
  "profile": Profile;
  "attributes": Attributes;
  "abilities": Abilities;
  "disciplines": Disciplines;
  "backgrounds": Backgrounds;
  "virtues": Virtues;
  "merits": Merits;
  "flaws": Flaws;
  "state": StateInJson;
  "notes": Notes;
}

export interface CharSheetInJson {
  Meta: Meta;
  Version: Version;
  Log: Log;
  Charsheet: CharSheetData;
  Settings: Settings;
}

export type StateInJson = State & { health: Health }