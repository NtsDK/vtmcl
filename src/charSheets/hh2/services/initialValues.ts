import {
  initialCommonAbilities,
  initialCommonProfile,
  initialCommonState,
} from "../../generic/services/initialValues";
import {
  HH2Abilities,
  HH2Profile,
  HH2State,
  NuminaAndOtherTraits,
} from "../domain";

export const initialHH2Profile: HH2Profile = {
  ...initialCommonProfile,
  nature: "",
  demeanor: "",
  concept: "",
  age: "",
  sex: "",
  residence: "",
};

export const initialNuminaAndOtherTraits: NuminaAndOtherTraits = [];

export const initialHH2State: HH2State = {
  ...initialCommonState,
  faith: 0,
};

export const initialHH2Abilities: HH2Abilities = {
  ...initialCommonAbilities,
};
