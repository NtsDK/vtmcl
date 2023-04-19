// Profile
export interface Profile {
  name: string;
  player: string;
  chronicle: string;
  nature: string;
  age: string;
  sex: string;
  demeanor: string;
  concept: string;
  clan: string;
  generation: string;
  sire: string;

  // changeling
  court: string;
  primaryLegacy: string;
  secondaryLegacy: string;
  house: string;
  seeming: string;
  kith: string;
  motley: string;
}

// Attributes
export interface Attributes {
  strength: number;
  dexterity: number;
  stamina: number;
  charisma: number;
  manipulation: number;
  appearance: number;
  perception: number;
  intelligence: number;
  wits: number;
}

// Advantages
export interface Virtues {
  conscience: number;
  self_control: number;
  courage: number;
}

type NameStringArray = {
  name: string;
  value: number;
}[];

export type Disciplines = NameStringArray;
export type DisciplinePaths = NameStringArray;
export type Rituals = {
  name: string;
  level: string;
}[];
export type Backgrounds = NameStringArray;
export type OtherTraits = NameStringArray;

// Changeling
export type Arts = {
  name: string;
  value: number;
}[];

export interface Realms {
  actor: number;
  fae: number;
  nature: number;
  prop: number;
  scene: number;
  time: number;
}

// Whole state
export interface State {
  // path
  humanity: number;
  pathName: string;
  bearingName: string;
  bearingModifier: string;
  // willpower
  willpowerRating: number;
  willpowerPool: number;
  // bloodpool
  bloodpool: number;
  bloodPerTurn: string;
  // other
  weakness: string;
  experience: string;
  // changeling
  antithesis: string;
  thresholds: string;
  birthrightsFrailties: string;
  glamourRating: number;
  glamourPool: number;
  banalityRating: number;
  banalityPool: number;
  nightmare: number;
}

export interface Health {
  bruised: number;
  hurt: number;
  injured: number;
  wounded: number;
  mauled: number;
  crippled: number;
  incapacitated: number;
}

export type Merits = string[];
export type Flaws = string[];

export type Notes = string;
export type CharHistory = string;
export type Goals = string;
export type AppearanceDescription = string;
export type CharacterImage = string;
export type AlliesAndContacts = string;
export type Possessions = string;
