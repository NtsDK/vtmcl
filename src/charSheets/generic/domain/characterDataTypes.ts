export interface CommonProfile {
  name: string;
  player: string;
  chronicle: string;
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

export type AttributesConfig = {
  header: "physical" | "social" | "mental";
  items: (keyof Attributes)[];
}[];

export type NameStringArray = {
  name: string;
  value: number;
}[];

export type Backgrounds = NameStringArray;
export type OtherTraits = NameStringArray;

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

export interface CommonState {
  willpowerRating: number;
  willpowerPool: number;
  experience: string;
}

export interface Virtues {
  conscience: number;
  self_control: number;
  courage: number;
}
