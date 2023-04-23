import {
  initialCommonAbilities,
  initialCommonProfile,
  initialCommonState,
} from "../../generic/services/initialValues";
import {
  DisciplinePaths,
  Disciplines,
  Rituals,
  Virtues,
  VtMAbilities,
  VtMProfile,
  VtMState,
} from "../domain";

export const initialVtMState: VtMState = {
  ...initialCommonState,
  humanity: 0,
  pathName: "",
  bearingName: "",
  bearingModifier: "",

  bloodpool: 0,
  bloodPerTurn: "",

  weakness: "",
};

export const initialVtMProfile: VtMProfile = {
  ...initialCommonProfile,
  nature: "",
  age: "",
  sex: "",
  demeanor: "",
  concept: "",
  clan: "",
  generation: "",
  sire: "",
};

export const initialVtMAbilities: VtMAbilities = {
  ...initialCommonAbilities,
};

export const initialVirtues: Virtues = {
  conscience: 1,
  self_control: 1,
  courage: 1,
};
export const initialDisciplines: Disciplines = [];
export const initialDisciplinePaths: DisciplinePaths = [];
export const initialRituals: Rituals = [];
