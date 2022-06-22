import { 
  Abilities,
  Attributes,
  Backgrounds, 
  Disciplines, 
  Flaws, 
  Health, 
  Merits, 
  Notes, 
  Profile, 
  Settings, 
  State, 
  Virtues 
} from "../domain";

export const initialProfile: Profile = {
  name: "",
  player: "",
  chronicle: "",
  nature: "",
  age: "",
  sex: "",
  demeanor: "",
  concept: "",
  clan: "",
  generation: "",
  sire: ""
};
export const initialAttributes: Attributes = {
  "strength": 1,
  "dexterity": 1,
  "stamina": 1,
  "charisma": 1,
  "manipulation": 1,
  "appearance": 1,
  "perception": 1,
  "intelligence": 1,
  "wits": 1
}
export const initialAbilities: Abilities = {
  "alertness": 0,
  "athletics": 0,
  "brawl": 0,
  "empathy": 0,
  "expression": 0,
  "intimidation": 0,
  "leadership": 0,
  "streetwise": 0,
  "subterfuge": 0,
  "awareness": 0,
  "animalken": 0,
  "crafts": 0,
  "drive": 0,
  "etiquette": 0,
  "firearms": 0,
  "melee": 0,
  "performance": 0,
  "stealth": 0,
  "survival": 0,
  "larceny": 0,
  "academics": 0,
  "computer": 0,
  "finance": 0,
  "investigation": 0,
  "law": 0,
  "medicine": 0,
  "occult": 0,
  "politics": 0,
  "science": 0,
  "technology": 0
};

// advantages
export const initialDisciplines: Disciplines = [];
export const initialBackgrounds: Backgrounds = [];
export const initialVirtues: Virtues = {
  "conscience": 1,
  "self_control": 1,
  "courage": 1
};

// 
export const initialMerits: Merits = [];
export const initialFlaws: Flaws = [];

export const initialState: State = {
  bloodpool: 0,
  humanity: 0,
  willpower: 0,
  willpower2: 0,
};

export const initialHealth: Health = {
  bruised: 0,
  hurt: 0,
  injured: 0,
  wounded: 0,
  mauled: 0,
  crippled: 0,
  incapacitated: 0
};

export const initialNotes: Notes = '';


// no character data
export const initialSettings: Settings = {
  backgroundColor: "#ababab",
  charsheetBackColor: "#ffffff",
  charsheetBackImage: "../images/back.png",
  charsheetBackMode: "charsheet-image"
}