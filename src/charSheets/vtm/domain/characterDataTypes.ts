import { NameStringArray } from "../../commons/domain";

export interface VtMProfile {
  nature: string;
  age: string;
  sex: string;
  demeanor: string;
  concept: string;
  clan: string;
  generation: string;
  sire: string;
}

// Advantages
export interface Virtues {
  conscience: number;
  self_control: number;
  courage: number;
}

export type Disciplines = NameStringArray;
export type DisciplinePaths = NameStringArray;
export type Rituals = {
  name: string;
  level: string;
}[];

export interface VtMState {
  // path
  humanity: number;
  pathName: string;
  bearingName: string;
  bearingModifier: string;
  // bloodpool
  bloodpool: number;
  bloodPerTurn: string;
  // other
  weakness: string;
}
