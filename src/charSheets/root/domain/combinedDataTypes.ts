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
  VtDAProfile,
  VtDAState,
  VtDAAbilities,
  VtDAPresetName,
  VtDAFreebiePointName,
} from "../../vtda/domain";
import {
  HH2Profile,
  HH2State,
  HH2Abilities,
  HH2PresetName,
  HH2FreebiePointName,
} from "../../hh2/domain";

// Profile
export interface Profile
  extends VtMProfile,
    CtDProfile,
    HH2Profile,
    VtDAProfile {}

export interface State extends VtMState, CtDState, HH2State, VtDAState {}

export interface Abilities
  extends VtMAbilities,
    CtDAbilities,
    HH2Abilities,
    VtDAAbilities {}

export type PresetName =
  | VtMPresetName
  | CtDPresetName
  | HH2PresetName
  | VtDAPresetName;

export type FreebiePointName =
  | CommonFreebiePointName
  | VtMFreebiePointName
  | CtDFreebiePointName
  | HH2FreebiePointName
  | VtDAFreebiePointName;
