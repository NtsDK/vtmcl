import { Abilities } from "./abilities";
import { 
  Attributes, 
  Backgrounds, 
  Disciplines, 
  Flaws, 
  Health, 
  Merits, 
  Notes, 
  Profile, 
  State, 
  Virtues 
} from "./characterDataTypes";
import { 
  Log, 
  Meta, 
  Settings, 
  Version 
} from "./nonCharacterDataTypes";

export interface CharSheet {
  Meta: Meta;
  Version: Version;
  Log: Log;
  Settings: Settings;
  profile: Profile;
  attributes: Attributes;
  abilities: Abilities;
  disciplines: Disciplines;
  backgrounds: Backgrounds;
  virtues: Virtues;
  merits: Merits;
  flaws: Flaws;
  state: State;
  health: Health;
  notes: Notes;
}
