import { initialCommonAbilities, initialCommonProfile, initialCommonState } from "../../generic/services/initialValues";
import { MtAAbilities, MtAProfile, MtAState, Spheres } from "../domain";

export const initialMtAProfile: MtAProfile = {
  ...initialCommonProfile,
  age:"",
  sex: "",
  nature: "",
  demeanor: "",
  concept: "",
  essence: "",
  affiliation: "",
  sect: "",
};

export const initialMtAAbilities: MtAAbilities = {
  ...initialCommonAbilities,
  enigmas: 0,
  art: 0,
  martialArts: 0,
  meditation: 0,
  research: 0,
  cosmology: 0,
  esoterica: 0,
};

export const initialMtAState: MtAState = {
  ...initialCommonState,
  arete: 0,
  quintessence: 0,
  paradox: 0,
};

export const initialSpheres: Spheres = {
  correspondence: 0,
  entropy: 0,
  forces: 0,
  life: 0,
  matter: 0,
  mind: 0,
  prime: 0,
  spirit: 0,
  time: 0,
};
