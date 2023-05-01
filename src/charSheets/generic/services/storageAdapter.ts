import * as R from "ramda";
import { useStore } from "../../root/services/store";
import {
  ProfileService,
  AttributesService,
  AbilitiesService,
  AbilitiesExtensionService,
  BackgroundsService,
  HealthService,
  StatusService,
  MeritsNFlawsService,
  NotesService,
  AlliesAndContactsService,
  PossessionsService,
  AppearanceService,
  OtherTraitsService,
  HistoryService,
  VirtuesService,
} from "../application/ports";

export function useProfile(): ProfileService {
  return R.pick(["profile", "setProfileItem"], useStore());
}
export function useAttributes(): AttributesService {
  return R.pick(["attributes", "setAttribute"], useStore());
}
export function useAbilities(): AbilitiesService {
  return R.pick(["abilities", "setAbility"], useStore());
}
export function useAbilitiesExtension(): AbilitiesExtensionService {
  return R.pick(
    [
      "abilitiesExtension",
      "setAbilityExtensionName",
      "setAbilityExtensionValue",
    ],
    useStore()
  );
}

export function useBackgrounds(): BackgroundsService {
  return R.pick(
    [
      "backgrounds",
      "addBackground",
      "setBackgroundName",
      "setBackgroundValue",
      "removeBackground",
    ],
    useStore()
  );
}
export function useHealth(): HealthService {
  return R.pick(
    ["health", "setHealth", "healthChimerical", "setHealthChimerical"],
    useStore()
  );
}
export function useStatus(): StatusService {
  return R.pick(["state", "setState"], useStore());
}
export function useMeritsNFlaws(): MeritsNFlawsService {
  return R.pick(
    [
      "merits",
      "addMerit",
      "setMerit",
      "removeMerit",
      "flaws",
      "addFlaw",
      "setFlaw",
      "removeFlaw",
    ],
    useStore()
  );
}
export function useNotes(): NotesService {
  return R.pick(["notes", "setNotes"], useStore());
}
export function useAlliesAndContacts(): AlliesAndContactsService {
  return R.pick(["alliesAndContacts", "setAlliesAndContacts"], useStore());
}
export function usePossessions(): PossessionsService {
  return R.pick(["possessions", "setPossessions"], useStore());
}
export function useAppearance(): AppearanceService {
  return R.pick(
    [
      "appearanceDescription",
      "setAppearanceDescription",
      "characterImage",
      "setCharacterImage",
    ],
    useStore()
  );
}
export function useOtherTraits(): OtherTraitsService {
  return R.pick(
    [
      "otherTraits",
      "addOtherTrait",
      "setOtherTraitName",
      "setOtherTraitValue",
      "removeOtherTrait",
    ],
    useStore()
  );
}

export function useCharHistory(): HistoryService {
  return R.pick(
    ["charHistory", "setCharHistory", "goals", "setGoals"],
    useStore()
  );
}

export function useVirtues(): VirtuesService {
  return R.pick(["virtues", "setVirtue"], useStore());
}
