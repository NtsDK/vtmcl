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
import {
  VtM_V3Profile,
  VtM_V3State,
  VtM_V3Abilities,
  VtM_V3PresetName,
} from "../../vtm_v3/domain";
import {
  MtAAbilities,
  MtAFreebiePointName,
  MtAPresetName,
  MtAProfile,
  MtAState,
} from "../../mta/domain";

// Profile
export interface Profile
  extends VtMProfile,
    CtDProfile,
    HH2Profile,
    VtDAProfile,
    VtM_V3Profile,
    MtAProfile {}

export interface State
  extends VtMState,
    CtDState,
    HH2State,
    VtDAState,
    VtM_V3State,
    MtAState {}

export interface Abilities
  extends VtMAbilities,
    CtDAbilities,
    HH2Abilities,
    VtDAAbilities,
    VtM_V3Abilities,
    MtAAbilities {}

export type PresetName =
  | VtMPresetName
  | CtDPresetName
  | HH2PresetName
  | VtDAPresetName
  | VtM_V3PresetName
  | MtAPresetName;

export type FreebiePointName =
  | CommonFreebiePointName
  | VtMFreebiePointName
  | CtDFreebiePointName
  | HH2FreebiePointName
  | VtDAFreebiePointName
  | MtAFreebiePointName;
