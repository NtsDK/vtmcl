import * as R from 'ramda';
import {
  AbilitiesExtensionService,
  AbilitiesService,
  AlliesAndContactsService,
  AppearanceService,
  ArtsService,
  AttributesService,
  BackgroundsService,
  CharSheetStorageService,
  DisciplinePathsService,
  DisciplinesService,
  ErrorDescriptionService,
  HistoryService,
  LimitService,
  MeritsNFlawsService,
  NotesService,
  OtherTraitsService,
  PossessionsService,
  PresetService,
  ProfileService,
  RealmsService,
  RitualsService,
  SettingsService,
  StateNHealthService,
  VirtuesService,
} from "../application/ports";
import { useStore } from "./store";

export function useErrorDescription(): ErrorDescriptionService {
  return R.pick([
    'errorDescription',
    'setErrorDescription'
  ], useStore());
}
export function useCharSheetStorage(): CharSheetStorageService {
  return R.pick([
    'setCharSheet',
    'getCharSheet'
  ], useStore());
}
export function usePreset(): PresetService {
  return useStore();
}
export function useProfile(): ProfileService {
  return R.pick([
    'profile',
    'setProfileItem'
  ], useStore());
}
export function useAttributes(): AttributesService {
  return R.pick([
    'attributes',
    'setAttribute'
  ], useStore());
}
export function useAbilities(): AbilitiesService {
  return R.pick([
    'abilities',
    'setAbility'
  ], useStore());
}
export function useAbilitiesExtension(): AbilitiesExtensionService {
  return R.pick([
    'abilitiesExtension',
    'setAbilityExtensionName',
    'setAbilityExtensionValue',
  ], useStore());
}
export function useVirtues(): VirtuesService {
  return useStore();
}
export function useDisciplines(): DisciplinesService {
  return useStore();
}
export function useDisciplinePaths(): DisciplinePathsService {
  return useStore();
}
export function useRituals(): RitualsService {
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
export function useAlliesAndContacts(): AlliesAndContactsService {
  return useStore();
}
export function usePossessions(): PossessionsService {
  return useStore();
}
export function useAppearance(): AppearanceService {
  return useStore();
}
export function useOtherTraits(): OtherTraitsService {
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

export function useLimits(): LimitService {
  return R.pick([
    'limits',
  ], useStore());
}
export function useCharHistory(): HistoryService {
  return useStore();
}
