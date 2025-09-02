import * as R from "ramda";

import { useStore } from "../../root/services/store";
import { SpheresService } from "../application/ports";

export function useSpheres(): SpheresService {
  return R.pick(["spheres", "setSphere"], useStore());
}
