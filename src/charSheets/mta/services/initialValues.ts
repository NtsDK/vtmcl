import { initialCommonAbilities, initialCommonProfile } from "../../generic/services/initialValues";
import { MtAAbilities, MtAProfile } from "../domain";

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
