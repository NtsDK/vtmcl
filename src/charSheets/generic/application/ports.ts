import { Profile, Abilities, State } from "../../root/domain";
import {
  AbilitiesExtension,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  AlliesAndContacts,
  AppearanceDescription,
  Attributes,
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
  Virtues,
} from "../domain";

export interface CombinedGenericService
  extends ProfileService,
    AttributesService,
    AbilitiesService,
    AbilitiesExtensionService,
    BackgroundsService,
    OtherTraitsService,
    MeritsNFlawsService,
    HealthService,
    StatusService,
    NotesService,
    AppearanceService,
    AlliesAndContactsService,
    PossessionsService,
    HistoryService,
    VirtuesService {}

// generic
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

export interface AbilitiesExtensionService {
  abilitiesExtension: AbilitiesExtension;
  setAbilityExtensionName(
    abilityName: AbilitiesExtensionName,
    name: string
  ): void;
  setAbilityExtensionValue(
    abilityName: AbilitiesExtensionValue,
    value: number
  ): void;
}

export interface BackgroundsService {
  backgrounds: Backgrounds;
  addBackground(): void;
  setBackgroundName(index: number, name: string): void;
  setBackgroundValue(index: number, value: number): void;
  removeBackground(index: number): void;
}

export interface OtherTraitsService {
  otherTraits: OtherTraits;
  addOtherTrait(): void;
  setOtherTraitName(index: number, name: string): void;
  setOtherTraitValue(index: number, value: number): void;
  removeOtherTrait(index: number): void;
}

// generic
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

export interface HealthService {
  health: Health;
  setHealth(healthName: keyof Health, value: number): void;
  healthChimerical: Health;
  setHealthChimerical(healthName: keyof Health, value: number): void;
}

export interface StatusService {
  state: State;
  setState<T extends keyof State>(stateName: T, value: State[T]): void;
}

export interface NotesService {
  notes: Notes;
  setNotes(notes: Notes): void;
}

export interface AppearanceService {
  appearanceDescription: AppearanceDescription;
  setAppearanceDescription(appearanceDescription: AppearanceDescription): void;
  characterImage: CharacterImage;
  setCharacterImage(characterImage: CharacterImage): void;
}

export interface AlliesAndContactsService {
  alliesAndContacts: AlliesAndContacts;
  setAlliesAndContacts(alliesAndContacts: AlliesAndContacts): void;
}

export interface PossessionsService {
  possessions: Possessions;
  setPossessions(possessions: Possessions): void;
}

export interface HistoryService {
  charHistory: CharHistory;
  setCharHistory(charHistory: CharHistory): void;
  goals: Goals;
  setGoals(goals: Goals): void;
}

export interface VirtuesService {
  virtues: Virtues;
  setVirtue(virtueName: keyof Virtues, value: number): void;
}
