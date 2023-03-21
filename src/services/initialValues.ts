import * as R from 'ramda';

import { CURRENT_VERSION } from "../constants";
import {
  Abilities,
  AbilitiesExtension,
  AlliesAndContacts,
  AppearanceDescription,
  Arts,
  Attributes,
  Backgrounds,
  CharacterImage,
  CharHistory,
  CharSheet,
  DisciplinePaths,
  Disciplines,
  Flaws,
  Goals,
  Health,
  Merits,
  Notes,
  OtherTraits,
  Possessions,
  Preset,
  Profile,
  Realms,
  Rituals,
  Settings,
  State,
  Virtues
} from "../domain";

import { defaultBackgroundUrl } from './defaultBackground';

export const initialPreset: Preset = 'vampire_v20';

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
  sire: "",

  court: "",
  house: "",
  kith: "",
  primaryLegacy: "",
  secondaryLegacy: "",
  motley: "",
  seeming: "",
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
  "technology": 0,

  "enigmas": 0,
  "gremayre": 0,
  "kenning": 0
};

export const initialAbilitiesExtension: AbilitiesExtension = {
  talentName1: "",
  talentValue1: 0,
  talentName2: "",
  talentValue2: 0,
  skillName1: "",
  skillValue1: 0,
  skillName2: "",
  skillValue2: 0,
  knowledgeName1: "",
  knowledgeValue1: 0,
  knowledgeName2: "",
  knowledgeValue2: 0
};

// advantages
export const initialDisciplines: Disciplines = [];
export const initialDisciplinePaths: DisciplinePaths = [];
export const initialRituals: Rituals = [];
export const initialBackgrounds: Backgrounds = [];
export const initialOtherTraits: OtherTraits = [];
export const initialArts: Arts = [];
export const initialVirtues: Virtues = {
  "conscience": 1,
  "self_control": 1,
  "courage": 1
};
export const initialRealms: Realms = {
  actor: 0,
  fae: 0,
  nature: 0,
  prop: 0,
  scene: 0,
  time: 0,
};

// status
export const initialMerits: Merits = [];
export const initialFlaws: Flaws = [];

export const initialState: State = {
  humanity: 0,
  pathName: "",
  bearingName: "",
  bearingModifier: "",

  willpowerPool: 0,
  willpowerRating: 0,

  bloodpool: 0,
  bloodPerTurn: "",

  weakness: "",
  experience: "",

  // changeling
  antithesis: '',
  thresholds: '',
  birthrightsFrailties: '',
  glamourRating: 0,
  glamourPool: 0,
  banalityRating: 0,
  banalityPool: 0,
  nightmare: 0,
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
export const initialCharHistory: CharHistory = '';
export const initialGoals: Goals = '';
export const initialAppearanceDescription: AppearanceDescription = '';
export const initialCharacterImage: CharacterImage = '';
export const initialAlliesAndContacts: AlliesAndContacts = '';
export const initialPossessions: Possessions = '';


// no character data
export const initialSettings: Settings = {
  backgroundColor: "#ababab",
  charsheetBackColor: "#ffffff",
  // charsheetBackImage: "../images/back.png",
  charsheetBackImage_v2: defaultBackgroundUrl,
  charsheetBackMode: "charsheet-image"
}

export const initialCharSheet: CharSheet = {
  Version: CURRENT_VERSION,
  settings: initialSettings,

  preset: initialPreset,
  profile: initialProfile,
  attributes: initialAttributes,
  abilities: initialAbilities,
  abilitiesExtension: initialAbilitiesExtension,
  disciplines: initialDisciplines,
  disciplinePaths: initialDisciplinePaths,
  rituals: initialRituals,
  backgrounds: initialBackgrounds,
  virtues: initialVirtues,
  merits: initialMerits,
  flaws: initialFlaws,
  state: initialState,
  health: initialHealth,
  healthChimerical: R.clone(initialHealth),
  notes: initialNotes,
  charHistory: initialCharHistory,
  goals: initialGoals,
  otherTraits: initialOtherTraits,
  appearanceDescription: initialAppearanceDescription,
  characterImage: initialCharacterImage,
  alliesAndContacts: initialAlliesAndContacts,
  possessions: initialPossessions,

  arts: initialArts,
  realms: initialRealms,
}
