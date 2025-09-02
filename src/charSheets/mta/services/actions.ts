import * as R from "ramda";

import { Realms } from "../../ctd/domain";
import { applyRange, mutateObj } from "../../../lib/miscUtils";
import { CombinedMtAService } from "../application/ports";
import { CharSheet } from "../../root/domain";
import { getLimits, ServiceToActions } from "../../root/services/public";
import { Spheres } from "../domain";

export const mtaActions: ServiceToActions<CombinedMtAService> = {
  setSphere(
    state: CharSheet,
    [sphereName, value]: [keyof Spheres, number],
  ): CharSheet {
    return mutateObj(
      state,
      "spheres",
      mutateObj(state.spheres, sphereName, value),
    );
  },
};
