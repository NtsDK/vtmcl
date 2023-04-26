import * as R from "ramda";

import {
  CharSheetStorageService,
  ErrorDescriptionService,
  LimitService,
  PresetService,
} from "../application/ports";

import { useStore } from "./store";

export function useCharSheetStorage(): CharSheetStorageService {
  return R.pick(["setCharSheet", "charSheet"], useStore());
}
export function usePreset(): PresetService {
  return R.pick(["preset", "setPreset"], useStore());
}
export function useLimits(): LimitService {
  return R.pick(["limits"], useStore());
}
export function useErrorDescription(): ErrorDescriptionService {
  return R.pick(["errorDescription", "setErrorDescription"], useStore());
}
