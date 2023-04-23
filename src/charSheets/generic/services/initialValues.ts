import {
  CommonState,
  CommonProfile,
  Attributes,
  AbilitiesExtension,
  AlliesAndContacts,
  AppearanceDescription,
  Backgrounds,
  CharacterImage,
  CharHistory,
  Flaws,
  Goals,
  Health,
  Merits,
  Notes,
  OtherTraits,
  Possessions,
} from "../domain";

export const initialCommonState: CommonState = {
  willpowerRating: 0,
  willpowerPool: 0,
  experience: "",
};

export const initialCommonProfile: CommonProfile = {
  name: "",
  player: "",
  chronicle: "",
};

export const initialAttributes: Attributes = {
  strength: 1,
  dexterity: 1,
  stamina: 1,
  charisma: 1,
  manipulation: 1,
  appearance: 1,
  perception: 1,
  intelligence: 1,
  wits: 1,
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
  knowledgeValue2: 0,
};

export const initialHealth: Health = {
  bruised: 0,
  hurt: 0,
  injured: 0,
  wounded: 0,
  mauled: 0,
  crippled: 0,
  incapacitated: 0,
};

// advantages
export const initialBackgrounds: Backgrounds = [];
export const initialOtherTraits: OtherTraits = [];

// status
export const initialMerits: Merits = [];
export const initialFlaws: Flaws = [];

export const initialNotes: Notes = "";
export const initialCharHistory: CharHistory = "";
export const initialGoals: Goals = "";
export const initialAppearanceDescription: AppearanceDescription = "";
export const initialCharacterImage: CharacterImage = "";
export const initialAlliesAndContacts: AlliesAndContacts = "";
export const initialPossessions: Possessions = "";
