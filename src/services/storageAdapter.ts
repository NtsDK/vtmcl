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
  StatusService,
  HealthService,
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
  return R.pick([
    'preset',
    'setPreset',
    'getPresetDisplayName',
  ], useStore());
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
  return R.pick([
    'virtues',
    'setVirtue'
  ], useStore());
}

export function useDisciplines(): DisciplinesService {
  return R.pick([
    'disciplines',
    'addDiscipline',
    'removeDiscipline',
    'setDisciplineName',
    'setDisciplineValue',
  ], useStore());
}
export function useDisciplinePaths(): DisciplinePathsService {
  return R.pick([
    'disciplinePaths',
    'addDisciplinePath',
    'removeDisciplinePath',
    'setDisciplinePathName',
    'setDisciplinePathValue',
  ], useStore());
}
export function useRituals(): RitualsService {
  return R.pick([
    'rituals',
    'addRitual',
    'setRitualName',
    'setRitualLevel',
    'removeRitual',
  ], useStore());
}
export function useBackgrounds(): BackgroundsService {
  return R.pick([
    'backgrounds',
    'addBackground',
    'setBackgroundName',
    'setBackgroundValue',
    'removeBackground',
  ], useStore());
}
export function useHealth(): HealthService {
  return R.pick([
    'health',
    'setHealth',
    'healthChimerical',
    'setHealthChimerical',
  ], useStore());
}
export function useStatus(): StatusService {
  return R.pick([
    'state',
    'setState',
  ], useStore());
}
export function useMeritsNFlaws(): MeritsNFlawsService {
  return R.pick([
    'merits',
    'addMerit',
    'setMerit',
    'removeMerit',
    'flaws',
    'addFlaw',
    'setFlaw',
    'removeFlaw',
  ], useStore());
}
export function useNotes(): NotesService {
  return R.pick([
    'notes',
    'setNotes',
  ], useStore());
}
export function useAlliesAndContacts(): AlliesAndContactsService {
  return R.pick([
    'alliesAndContacts',
    'setAlliesAndContacts',
  ], useStore());
}
export function usePossessions(): PossessionsService {
  return R.pick([
    'possessions',
    'setPossessions',
  ], useStore());
}
export function useAppearance(): AppearanceService {
  return R.pick([
    'appearanceDescription',
    'setAppearanceDescription',
    'characterImage',
    'setCharacterImage',
  ], useStore());
}
export function useOtherTraits(): OtherTraitsService {
  return R.pick([
    'otherTraits',
    'addOtherTrait',
    'setOtherTraitName',
    'setOtherTraitValue',
    'removeOtherTrait',
  ], useStore());
}
export function useSettings(): SettingsService {
  return R.pick([
    'settings',
    'setBackgroundColor',
    'setCharsheetBackColor',
    'setCharsheetBackImage',
    'setCharsheetBackMode',
  ], useStore());
}


export function useRealms(): RealmsService {
  return R.pick([
    'realms',
    'setRealm',
  ], useStore());
}
export function useArts(): ArtsService {
  return R.pick([
    'arts',
    'addArt',
    'setArtName',
    'setArtValue',
    'removeArt',
  ], useStore());
}

export function useLimits(): LimitService {
  return R.pick([
    'limits',
  ], useStore());
}
export function useCharHistory(): HistoryService {
  return R.pick([
    'charHistory',
    'setCharHistory',
    'goals',
    'setGoals',
  ], useStore());
}
