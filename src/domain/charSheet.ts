import {
  Abilities,
  AbilitiesExtension
} from "./abilities";
import {
  Arts,
  Attributes,
  Backgrounds,
  CharHistory,
  DisciplinePaths,
  Disciplines,
  Flaws,
  Goals,
  Health,
  Merits,
  Notes,
  Preset,
  Profile,
  Realms,
  Rituals,
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

  arts: Arts;
  realms: Realms;
}
