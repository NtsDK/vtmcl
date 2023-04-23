import * as R from "ramda";

import {
  CharSheetStorageService,
  LimitService,
  PresetService,
} from "../application/ports";

import { useStore } from "./store";

export function useCharSheetStorage(): CharSheetStorageService {
  return R.pick(["setCharSheet", "getCharSheet"], useStore());
}
export function usePreset(): PresetService {
  return R.pick(["preset", "setPreset"], useStore());
}
export function useLimits(): LimitService {
  return R.pick(["limits"], useStore());
}
