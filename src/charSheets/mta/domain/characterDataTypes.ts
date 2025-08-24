import { CommonProfile } from "../../generic/domain";
// import { VtMProfile, VtMState } from "../../vtm/domain";

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

// export interface VtDAState extends VtMState {
//   // road
//   roadValue: number;
//   roadName: string;
//   auraName: string;
//   auraModifier: string;
// }
