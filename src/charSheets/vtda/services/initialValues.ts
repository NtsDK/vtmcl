import {
  initialCommonAbilities,
  initialCommonState,
} from "../../generic/services/initialValues";
import { initialVtMState } from "../../vtm/services/initialValues";
import { VtDAAbilities, VtDAState } from "../domain";

export const initialVtDAState: VtDAState = {
  ...initialCommonState,
  ...initialVtMState,
  roadValue: 0,
  roadName: "",
  auraName: "",
  auraModifier: "",
};

export const initialVtDAAbilities: VtDAAbilities = {
  ...initialCommonAbilities,
  legerdemain: 0,
  archery: 0,
  commerce: 0,
  ride: 0,
  enigmas: 0,
  hearthWisdom: 0,
  seneschal: 0,
  theology: 0,
};
