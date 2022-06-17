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
}
export interface BackgroundsService {
  backgrounds: Backgrounds;
}

export interface VirtuesService {
  virtues: Virtues;
  setVirtue(virtueName: keyof Virtues, value: number): void;
}

export interface MeritsNFlawsService {
  merits: Merits;
  flaws: Flaws;
}

export interface StateNHealthService {
  state: State;
  health: Health;
}

export interface NotesService {
  notes: Notes;
}

// non char sheet

export interface SettingsService {
  settings: Settings;
}

export interface MetaService {
  meta: Meta;
}

export interface LogService {
  log: Log;
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