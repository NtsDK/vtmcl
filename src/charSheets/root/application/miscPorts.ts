import {
  CharsheetBackMode,
  ErrorDescription,
  Settings,
} from "../../misc/domain";

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
