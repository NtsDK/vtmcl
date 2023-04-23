import {
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
  alertness: 0,
  athletics: 0,
  brawl: 0,
  empathy: 0,
  expression: 0,
  intimidation: 0,
  leadership: 0,
  streetwise: 0,
  subterfuge: 0,
  awareness: 0,
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
  finance: 0,
  investigation: 0,
  law: 0,
  medicine: 0,
  occult: 0,
  politics: 0,
  science: 0,
  technology: 0,
};

export const initialVirtues: Virtues = {
  conscience: 1,
  self_control: 1,
  courage: 1,
};
export const initialDisciplines: Disciplines = [];
export const initialDisciplinePaths: DisciplinePaths = [];
export const initialRituals: Rituals = [];
