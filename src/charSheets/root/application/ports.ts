import { PresetName, Limits, CharSheet, ErrorDescription } from "../domain";

export interface CombinedRootService
  extends PresetService,
    LimitService,
    CharSheetStorageService {}

export interface PresetService {
  preset: PresetName;
  setPreset(preset: PresetName): void;
}

export interface LimitService {
  limits: Limits;
}

export interface CharSheetStorageService {
  setCharSheet(charSheet: CharSheet): void;
  charSheet: CharSheet;
}

export interface ErrorDescriptionService {
  errorDescription: ErrorDescription | null;
  setErrorDescription(errorDescription: ErrorDescription | null): void;
}
