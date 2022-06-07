
export interface Profile {
  "name": string;
  "player": string;
  "chronicle": string;
  "nature": string;
  "age": string;
  "sex": string;
  "demeanor": string;
  "concept": string;
  "clan": string;
  "generation": string;
  "sire": string;
}

export interface Attributes {
  "strength": number;
  "dexterity": number;
  "stamina": number;
  "charisma": number;
  "manipulation": number;
  "appearance": number;
  "perception": number;
  "intelligence": number;
  "wits": number;
}

export interface State {
  "humanity": number;
  "willpower": number;
  "bloodpool": number;
  // "health": ;
  "willpower2": number;
}

export interface Health {
  "bruised": number;
  "hurt": number;
  "injured": number;
  "wounded": number;
  "mauled": number;
  "crippled": number;
  "incapacitated": number;
}

export interface Virtues {
  "conscience": number;
  "self_control": number;
  "courage": number;
}

export type Disciplines = Record<string, number>;
export type Backgrounds = Record<string, number>;
export type Merits = Record<string, boolean>;
export type Flaws = Record<string, boolean>;

export type Notes = string;