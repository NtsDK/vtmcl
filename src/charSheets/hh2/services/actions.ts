import * as R from "ramda";

import { applyRange, mutateObj } from "../../../lib/miscUtils";
import { CharSheet } from "../../root/domain";
import { getLimits, ServiceToActions } from "../../root/services/public";
import { CombinedHH2Service } from "../application/ports";

export const hh2Actions: ServiceToActions<CombinedHH2Service> = {
  addNuminaOrTrait(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "numinaAndOtherTraits",
      R.append({ name: "", value: 0 }, state.numinaAndOtherTraits)
    );
  },
  removeNuminaOrTrait(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(
      state,
      "numinaAndOtherTraits",
      R.remove(index, 1, state.numinaAndOtherTraits)
    );
  },
  setNuminaOrTraitName(
    state: CharSheet,
    [index, name]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "numinaAndOtherTraits",
      R.update(
        index,
        {
          ...state.numinaAndOtherTraits[index],
          name,
        },
        state.numinaAndOtherTraits
      )
    );
  },
  setNuminaOrTraitValue(
    state: CharSheet,
    [index, value]: [number, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "numinaAndOtherTraits",
      R.update(
        index,
        {
          ...state.numinaAndOtherTraits[index],
          value: applyRange(0, limits.parameterLimit, value),
        },
        state.numinaAndOtherTraits
      )
    );
  },
};
