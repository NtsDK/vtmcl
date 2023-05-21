import { initialCommonAbilities } from "../../generic/services/initialValues";
import { VtDAAbilities } from "../domain";

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
