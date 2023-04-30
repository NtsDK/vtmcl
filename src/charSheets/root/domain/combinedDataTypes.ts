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
import {
  HH2Profile,
  HH2State,
  HH2Abilities,
  HH2PresetName,
} from "../../hh2/domain";

// Profile
export interface Profile extends VtMProfile, CtDProfile, HH2Profile {}

export interface State extends VtMState, CtDState, HH2State {}

export interface Abilities extends VtMAbilities, CtDAbilities, HH2Abilities {}

export type PresetName = VtMPresetName | CtDPresetName | HH2PresetName;

export type FreebiePointName =
  | CommonFreebiePointName
  | VtMFreebiePointName
  | CtDFreebiePointName;
