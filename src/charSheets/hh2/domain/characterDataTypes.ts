import {
  CommonProfile,
  CommonState,
  NameStringArray,
} from "../../generic/domain";

export interface HH2Profile extends CommonProfile {
  nature: string;
  demeanor: string;
  concept: string;
  age: string;
  sex: string;
  residence: string;
}

export interface HH2State extends CommonState {
  faith: number;
}

export type NuminaAndOtherTraits = NameStringArray;
