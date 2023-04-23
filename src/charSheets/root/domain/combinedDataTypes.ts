import { CommonFreebiePointName } from "../../generic/domain";
import {
  CtDProfile,
  CtDState,
  CtDAbilities,
  CtDPresetName,
  CtDFreebiePointName,
} from "../../ctd/domain";
import {
  VtMProfile,
  VtMState,
  VtMAbilities,
  VtMPresetName,
  VtMFreebiePointName,
} from "../../vtm/domain";

// Profile
export interface Profile extends VtMProfile, CtDProfile {}

export interface State extends VtMState, CtDState {}

export interface Abilities extends VtMAbilities, CtDAbilities {}

export type Preset = VtMPresetName | CtDPresetName;

export type FreebiePointName =
  | CommonFreebiePointName
  | VtMFreebiePointName
  | CtDFreebiePointName;
