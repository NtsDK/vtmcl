import * as R from "ramda";
import { useStore } from "../../root/services/store";
import { SettingsService } from "../application/ports";

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
