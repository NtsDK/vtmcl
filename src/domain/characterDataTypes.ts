
// Profile
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

  // changeling
  "court": string;
  "legacies": string;
  "house": string;
  "seeming": string;
  "kith": string;
  "motley": string;
}

export type ProfileConfigItem = keyof Profile | {
  name: keyof Profile;
  optionsName?: string;
};

export type ProfileConfig = ProfileConfigItem[][];

export const profileConfig: ProfileConfig = [[
    'name',
    'player',
    'chronicle',
    'age',
    'sex'
  ], [
    {
      name: 'nature',
      optionsName: 'archetypeOptions'
    },
    {
      name: 'demeanor',
      optionsName: 'archetypeOptions'
    },
    'concept',
    {
      name: 'clan',
      optionsName: 'clanOptions'
    },
    {
      name: 'generation',
      optionsName: 'generationOptions'
    },
    'sire'
  ]
];

// Attributes
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

export const physicalAttributesArr: (keyof Attributes)[] = [
  "strength", 'dexterity', 'stamina'
];
export const socialAttributesArr: (keyof Attributes)[] = [
  "charisma", 'manipulation', 'appearance'
];
export const mentalAttributesArr: (keyof Attributes)[] = [
  "perception", 'intelligence', 'wits'
];

// Advantages
export interface Virtues {
  "conscience": number;
  "self_control": number;
  "courage": number;
}

export type Disciplines = {
  name: string,
  value: number
}[];
export type Backgrounds = {
  name: string,
  value: number
}[];

// Changeling
export type Arts = {
  name: string,
  value: number
}[];

export interface Realms {
  "actor": number;
  "fae": number;
  "nature": number;
  "prop": number;
  "scene": number;
  "time": number;
}

// Whole state
export interface State {
  // path
  "humanity": number;
  "pathName": string;
  "bearingName": string;
  "bearingModifier": string;
  // willpower
  "willpowerRating": number;
  "willpowerPool": number;
  // bloodpool
  "bloodpool": number;
  "bloodPerTurn": string;
  // other
  "weakness": string;
  "experience": string;
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

export type Merits = string[];
export type Flaws = string[];

export type Notes = string;
