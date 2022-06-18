// import { ErrorDescription } from "../domain/errorDescription";
// import { Game } from "../domain/game";
// import { Server } from "../domain/server";
// import { ServerDatabase } from "../domain/serverDatabase";

import { 
  Abilities, 
  Attributes, 
  Backgrounds, 
  CharSheet, 
  Disciplines, 
  ErrorDescription, 
  Flaws, 
  Health, 
  Log, 
  Merits, 
  Meta, 
  Notes, 
  Profile, 
  Settings, 
  State, 
  Virtues
} from "../domain";

// char sheet

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

export interface DisciplinesService {
  disciplines: Disciplines;
  addDiscipline(): void;
  setDisciplineName(index: number, name: string): void;
  setDisciplineValue(index: number, value: number): void;
  removeDiscipline(index: number): void;
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
  setState(stateName: keyof State, value: number): void;
  health: Health;
  setHealth(healthName: keyof Health, value: number): void;
}

export interface NotesService {
  notes: Notes;
  setNotes(notes: Notes): void;
}

// non char sheet

export interface SettingsService {
  settings: Settings;
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