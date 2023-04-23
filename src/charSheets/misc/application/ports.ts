import { CharsheetBackMode, ErrorDescription, Settings } from "../domain";

export interface CombinedMiscService
  extends SettingsService,
    ErrorDescriptionService {}

export interface SettingsService {
  settings: Settings;
  setBackgroundColor(backgroundColor: string): void;
  setCharsheetBackColor(charsheetBackColor: string): void;
  setCharsheetBackImage(charsheetBackImage: string): void;
  setCharsheetBackMode(charsheetBackMode: CharsheetBackMode): void;
}

export interface ErrorDescriptionService {
  errorDescription: ErrorDescription | null;
  setErrorDescription(errorDescription: ErrorDescription | null): void;
}
