import {
  Abilities,
  AbilitiesExtension
} from "./abilities";
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
  Settings,
  Version
} from "./nonCharacterDataTypes";

export interface CharSheet {
  Version: Version;
  Settings: Settings;
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
  notes: Notes;
}
