import * as R from "ramda";

import { useStore } from "../../root/services/store";
import { ArtsService, RealmsService } from "../application/ports";

export function useRealms(): RealmsService {
  return R.pick(["realms", "setRealm"], useStore());
}
export function useArts(): ArtsService {
  return R.pick(
    ["arts", "addArt", "setArtName", "setArtValue", "removeArt"],
    useStore(),
  );
}
