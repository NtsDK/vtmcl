import { CommonProfile, CommonState } from "../charSheets/commons/domain";
import { CtDProfile, CtDState, CtDAbilities } from "../charSheets/ctd/domain";
import { VtMProfile, VtMState, VtMAbilities } from "../charSheets/vtm/domain";

// Profile
export interface Profile extends CommonProfile, VtMProfile, CtDProfile {}

export interface State extends CommonState, VtMState, CtDState {}

export interface Abilities extends CtDAbilities, VtMAbilities {}
