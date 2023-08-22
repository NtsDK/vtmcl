import * as R from "ramda";

import { initialVirtues } from "../../generic/services/initialValues";
import { initialVtDAState } from "../services/initialValues";

import { checkRoad } from "./index";

describe("Vampire character checks", () => {
  describe("checkHumanity", () => {
    it("Initial virtues and zero road - invalid", () => {
      const state = R.clone(initialVtDAState);
      const virtues = R.clone(initialVirtues);
      expect(checkRoad(state, virtues)).toStrictEqual(false);
    });
    it("Initial virtues and road 2 - valid", () => {
      const state = R.clone(initialVtDAState);
      state.roadValue = 2;
      const virtues = R.clone(initialVirtues);
      expect(checkRoad(state, virtues)).toStrictEqual(true);
    });
    it("Initial virtues and non zero road - invalid", () => {
      const state = R.clone(initialVtDAState);
      state.roadValue = 5;
      const virtues = R.clone(initialVirtues);
      expect(checkRoad(state, virtues)).toStrictEqual(false);
    });
    it("Extended virtues and non zero road - invalid", () => {
      const state = R.clone(initialVtDAState);
      state.roadValue = 5;
      const virtues = R.clone(initialVirtues);
      virtues.conscience = 3;
      virtues.self_control = 2;
      expect(checkRoad(state, virtues)).toStrictEqual(true);
    });
  });
});
