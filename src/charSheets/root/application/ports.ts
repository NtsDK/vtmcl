import { Preset, Limits, CharSheet } from "../domain";

export interface CombinedRootService
  extends PresetService,
    LimitService,
    CharSheetStorageService {}

export interface PresetService {
  preset: Preset;
  setPreset(preset: Preset): void;
}

export interface LimitService {
  limits: Limits;
}

export interface CharSheetStorageService {
  setCharSheet(charSheet: CharSheet): void;
  getCharSheet(): CharSheet;
}
