import { VtMProfile, VtMState } from "../../vtm/domain";

export interface VtDAProfile extends VtMProfile {}

export interface VtDAState extends VtMState {
  // road
  roadValue: number;
  roadName: string;
  auraName: string;
  auraModifier: string;
}
