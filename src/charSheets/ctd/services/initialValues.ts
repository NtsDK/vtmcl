import {
  initialCommonAbilities,
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
  ...initialCommonAbilities,
  enigmas: 0,
  gremayre: 0,
  kenning: 0,
};
