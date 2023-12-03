import { initialCommonAbilities } from "../../generic/services/initialValues";
import {
  initialVtMState,
  initialVtMProfile,
} from "../../vtm/services/initialValues";
import {
  DisciplinePaths,
  Disciplines,
  Rituals,
  VtM_V3Profile,
  VtM_V3State,
  VtM_V3Abilities,
} from "../domain";

export const initialVtM_V3State: VtM_V3State = {
  ...initialVtMState,
};

export const initialVtM_V3Profile: VtM_V3Profile = {
  ...initialVtMProfile,
};

export const initialVtM_V3Abilities: VtM_V3Abilities = {
  ...initialCommonAbilities,
  dodge: 0,
  security: 0,
  linguistics: 0,
};

export const initialDisciplines: Disciplines = [];
export const initialDisciplinePaths: DisciplinePaths = [];
export const initialRituals: Rituals = [];
