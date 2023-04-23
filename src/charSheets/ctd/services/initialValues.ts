import {
  initialCommonProfile,
  initialCommonState,
} from "../../generic/services/initialValues";
import { CtDProfile, Arts, Realms, CtDState, CtDAbilities } from "../domain";

export const initialCtDProfile: CtDProfile = {
  ...initialCommonProfile,
  court: "",
  house: "",
  kith: "",
  primaryLegacy: "",
  secondaryLegacy: "",
  motley: "",
  seeming: "",
};

export const initialArts: Arts = [];

export const initialRealms: Realms = {
  actor: 0,
  fae: 0,
  nature: 0,
  prop: 0,
  scene: 0,
  time: 0,
};

export const initialCtDState: CtDState = {
  ...initialCommonState,
  antithesis: "",
  thresholds: "",
  birthrightsFrailties: "",
  glamourRating: 0,
  glamourPool: 0,
  banalityRating: 0,
  banalityPool: 0,
  nightmare: 0,
};

export const initialCtDAbilities: CtDAbilities = {
  alertness: 0,
  athletics: 0,
  brawl: 0,
  empathy: 0,
  expression: 0,
  intimidation: 0,
  leadership: 0,
  streetwise: 0,
  subterfuge: 0,
  animalken: 0,
  crafts: 0,
  drive: 0,
  etiquette: 0,
  firearms: 0,
  melee: 0,
  performance: 0,
  stealth: 0,
  survival: 0,
  larceny: 0,
  academics: 0,
  computer: 0,
  investigation: 0,
  law: 0,
  medicine: 0,
  politics: 0,
  science: 0,
  technology: 0,

  enigmas: 0,
  gremayre: 0,
  kenning: 0,
};
