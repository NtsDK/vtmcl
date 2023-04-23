import * as R from "ramda";
import { useStore } from "../../root/services/store";
import { ErrorDescriptionService, SettingsService } from "../application/ports";

// import {
//   ErrorDescriptionService,
//   SettingsService,
// } from "../application/miscPorts";

// import { useStore } from "./store";

export function useErrorDescription(): ErrorDescriptionService {
  return R.pick(["errorDescription", "setErrorDescription"], useStore());
}

export function useSettings(): SettingsService {
  return R.pick(
    [
      "settings",
      "setBackgroundColor",
      "setCharsheetBackColor",
      "setCharsheetBackImage",
      "setCharsheetBackMode",
    ],
    useStore()
  );
}
