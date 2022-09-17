import {
  AbilitiesExtensionService,
  AbilitiesService,
  ArtsService,
  AttributesService,
  BackgroundsService,
  CharSheetStorageService,
  DisciplinesService,
  ErrorDescriptionService,
  MeritsNFlawsService,
  NotesService,
  PresetService,
  ProfileService,
  RealmsService,
  SettingsService,
  StateNHealthService,
  VirtuesService,
} from "../application/ports";
import { useStore } from "./store";

export function useErrorDescription(): ErrorDescriptionService {
  return useStore();
}
export function useCharSheetStorage(): CharSheetStorageService {
  return useStore();
}
export function usePreset(): PresetService {
  return useStore();
}
export function useProfile(): ProfileService {
  return useStore();
}
export function useAttributes(): AttributesService {
  return useStore();
}
export function useAbilities(): AbilitiesService {
  return useStore();
}
export function useAbilitiesExtension(): AbilitiesExtensionService {
  return useStore();
}
export function useVirtues(): VirtuesService {
  return useStore();
}
export function useDisciplines(): DisciplinesService {
  return useStore();
}
export function useBackgrounds(): BackgroundsService {
  return useStore();
}
export function useStateNHealth(): StateNHealthService {
  return useStore();
}
export function useMeritsNFlaws(): MeritsNFlawsService {
  return useStore();
}
export function useNotes(): NotesService {
  return useStore();
}
export function useSettings(): SettingsService {
  return useStore();
}


export function useRealms(): RealmsService {
  return useStore();
}
export function useArts(): ArtsService {
  return useStore();
}
