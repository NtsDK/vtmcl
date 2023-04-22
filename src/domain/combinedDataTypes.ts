import {
  CommonFreebiePointName,
  CommonProfile,
  CommonState,
} from "../charSheets/commons/domain";
import {
  CtDProfile,
  CtDState,
  CtDAbilities,
  CtDPresetName,
  CtDFreebiePointName,
} from "../charSheets/ctd/domain";
import {
  VtMProfile,
  VtMState,
  VtMAbilities,
  VtMPresetName,
  VtMFreebiePointName,
} from "../charSheets/vtm/domain";

// Profile
export interface Profile extends CommonProfile, VtMProfile, CtDProfile {}

export interface State extends CommonState, VtMState, CtDState {}

export interface Abilities extends CtDAbilities, VtMAbilities {}

export type Preset = VtMPresetName | CtDPresetName;

export type FreebiePointName =
  | CommonFreebiePointName
  | VtMFreebiePointName
  | CtDFreebiePointName;
