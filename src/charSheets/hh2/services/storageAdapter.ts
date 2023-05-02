import * as R from "ramda";

import { useStore } from "../../root/services/store";
import { NuminaAndTraitsService } from "../application/ports";

export function useNuminaAndTraits(): NuminaAndTraitsService {
  return R.pick(
    [
      "addNuminaOrTrait",
      "removeNuminaOrTrait",
      "setNuminaOrTraitName",
      "setNuminaOrTraitValue",
      "numinaAndOtherTraits",
    ],
    useStore()
  );
}
