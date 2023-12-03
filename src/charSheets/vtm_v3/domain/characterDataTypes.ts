import {
  VtMProfile,
  VtMState,
  Disciplines,
  DisciplinePaths,
  Rituals,
} from "../../vtm/domain";

export interface VtM_V3Profile extends VtMProfile {}

export interface VtM_V3State extends VtMState {}

export type { Disciplines, DisciplinePaths, Rituals };
