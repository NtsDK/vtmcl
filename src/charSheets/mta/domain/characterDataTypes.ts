import { CommonProfile, CommonState } from "../../generic/domain";

export interface MtAProfile extends CommonProfile {
  age: string;
  sex: string;
  nature: string;
  demeanor: string;
  concept: string;
  essence: string;
  affiliation: string;
  sect: string;
}

export interface MtAState extends CommonState {
  arete: number;
  quintessence: number;
  paradox: number;
}

export interface Spheres {
  correspondence: number;
  entropy: number;
  forces: number;
  life: number;
  matter: number;
  mind: number;
  prime: number;
  spirit: number;
  time: number;
}

export type SpheresConfig = (keyof Spheres)[][];
