// import { ErrorDescription } from "../domain/errorDescription";
// import { Game } from "../domain/game";
// import { Server } from "../domain/server";
// import { ServerDatabase } from "../domain/serverDatabase";

import {
  Abilities,
  AbilitiesExtension,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  AlliesAndContacts,
  AppearanceDescription,
  Arts,
  Attributes,
  Backgrounds,
  CharHistory,
  CharSheet,
  CharsheetBackMode,
  DisciplinePaths,
  Disciplines,
  ErrorDescription,
  Flaws,
  Goals,
  Health,
  Limits,
  Merits,
  Notes,
  Possessions,
  Preset,
  Profile,
  Realms,
  Rituals,
  Settings,
  State,
  Virtues
} from "../domain";

// char sheet

export interface PresetService {
  preset: Preset;
  setPreset(preset: Preset): void;
  getPresetDisplayName: () => string;
}

export interface ProfileService {
  profile: Profile;
  setProfileItem(itemName: keyof Profile, value: string): void;
}

export interface AttributesService {
  attributes: Attributes;
  setAttribute(attributeName: keyof Attributes, value: number): void;
}

export interface AbilitiesService {
  abilities: Abilities;
  setAbility(abilityName: keyof Abilities, value: number): void;
}

export interface AbilitiesExtensionService {
  abilitiesExtension: AbilitiesExtension;
  setAbilityExtensionName(abilityName: AbilitiesExtensionName, name: string): void;
  setAbilityExtensionValue(abilityName: AbilitiesExtensionValue, value: number): void;
}

export interface DisciplinesService {
  disciplines: Disciplines;
  addDiscipline(): void;
  setDisciplineName(index: number, name: string): void;
  setDisciplineValue(index: number, value: number): void;
  removeDiscipline(index: number): void;
}

export interface DisciplinePathsService {
  disciplinePaths: DisciplinePaths;
  addDisciplinePath(): void;
  setDisciplinePathName(index: number, name: string): void;
  setDisciplinePathValue(index: number, value: number): void;
  removeDisciplinePath(index: number): void;
}

export interface RitualsService {
  rituals: Rituals;
  addRitual(): void;
  setRitualName(index: number, name: string): void;
  setRitualLevel(index: number, level: string): void;
  removeRitual(index: number): void;
}

export interface BackgroundsService {
  backgrounds: Backgrounds;
  addBackground(): void;
  setBackgroundName(index: number, name: string): void;
  setBackgroundValue(index: number, value: number): void;
  removeBackground(index: number): void;
}

export interface VirtuesService {
  virtues: Virtues;
  setVirtue(virtueName: keyof Virtues, value: number): void;
}

export interface RealmsService {
  realms: Realms;
  setRealm(realmName: keyof Realms, value: number): void;
}
export interface ArtsService {
  arts: Arts;
  addArt(): void;
  setArtName(index: number, name: string): void;
  setArtValue(index: number, value: number): void;
  removeArt(index: number): void;
}

export interface MeritsNFlawsService {
  merits: Merits;
  addMerit(): void;
  setMerit(index: number, name: string): void;
  removeMerit(index: number): void;
  flaws: Flaws;
  addFlaw(): void;
  setFlaw(index: number, name: string): void;
  removeFlaw(index: number): void;
}

export interface StateNHealthService {
  state: State;
  setState<T extends keyof State>(stateName: T, value: State[T]): void;
  health: Health;
  setHealth(healthName: keyof Health, value: number): void;
  healthChimerical: Health;
  setHealthChimerical(healthName: keyof Health, value: number): void;
}

export interface NotesService {
  notes: Notes;
  setNotes(notes: Notes): void;
}

export interface AppearanceService {
  appearanceDescription: AppearanceDescription;
  setAppearanceDescription(appearanceDescription: AppearanceDescription): void;
}

export interface AlliesAndContactsService {
  alliesAndContacts: AlliesAndContacts;
  setAlliesAndContacts(alliesAndContacts: AlliesAndContacts): void;
}

export interface PossessionsService {
  possessions: Possessions;
  setPossessions(possessions: Possessions): void;
}

export interface HistoryService {
  charHistory: CharHistory;
  setCharHistory(charHistory: CharHistory): void;
  goals: Goals;
  setGoals(goals: Goals): void;
}

// non char sheet

export interface SettingsService {
  settings: Settings;
  setBackgroundColor(backgroundColor: string): void;
  setCharsheetBackColor(charsheetBackColor: string): void;
  setCharsheetBackImage(charsheetBackImage: string): void;
  setCharsheetBackMode(charsheetBackMode: CharsheetBackMode): void;
}

export interface LimitService {
  limits: Limits;
}

// export interface GameStorageService {
//   games: Game[];
//   setGames(games: Game[]): void;
//   findGameByServerId(id: UniqueId): Game | undefined;
// }

// export interface ServerStorageService {
//   servers: Server[];
//   setServers(servers: Server[]): void;
//   findServer(id: UniqueId): Server | undefined;
// }

// export interface ServerDatabaseStorageService {
//   setServerDatabase(serverDatabase: ServerDatabase): void;
//   getServerDatabase(): ServerDatabase;
// }

export interface CharSheetStorageService {
  setCharSheet(charSheet: CharSheet): void;
  getCharSheet(): CharSheet;
}

export interface ErrorDescriptionService {
  errorDescription: ErrorDescription | null;
  setErrorDescription(errorDescription: ErrorDescription | null): void;
}
