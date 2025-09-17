import * as R from "ramda";

import {
  initialMtAState,
  initialSpheres,
} from "../services/initialValues";

import {
  checkArete,
  checkMageWillpower,
  checkParadox,
  checkSpheres,
  checkSpheresDotLimit
} from "./index";

describe("Mage character checks", () => {
  describe("checkMageWillpower", () => {
    it("willpowerRating = 0 - invalid", () => {
      const state = R.clone(initialMtAState);
      expect(checkMageWillpower(state)).toStrictEqual(false);
    });
    it("willpowerRating = 5 - valid", () => {
      const state = R.clone(initialMtAState);
      state.willpowerRating = 5;
      expect(checkMageWillpower(state)).toStrictEqual(true);
    });
    it("willpowerRating = 6 - invalid", () => {
      const state = R.clone(initialMtAState);
      state.willpowerRating = 6;
      expect(checkMageWillpower(state)).toStrictEqual(false);
    });
  });
  describe("checkArete", () => {
    it("Arete = 0 - invalid", () => {
      const state = R.clone(initialMtAState);
      expect(checkArete(state)).toStrictEqual(false);
    });
    it("Arete = 1 - valid", () => {
      const state = R.clone(initialMtAState);
      state.arete = 1;
      expect(checkArete(state)).toStrictEqual(true);
    });
    it("Arete = 2 - invalid", () => {
      const state = R.clone(initialMtAState);
      state.arete = 2;
      expect(checkArete(state)).toStrictEqual(false);
    });
  });
  describe("checkParadox", () => {
    it("Paradox = 0 - valid", () => {
      const state = R.clone(initialMtAState);
      expect(checkParadox(state)).toStrictEqual(true);
    });
    it("Paradox = 1 - invalid", () => {
      const state = R.clone(initialMtAState);
      state.paradox = 1;
      expect(checkParadox(state)).toStrictEqual(false);
    });
  });
  describe("checkSpheresDotLimit", () => {
    it("Spheres less than Arete - valid", () => {
      const spheres = R.clone(initialSpheres);
      const state = R.clone(initialMtAState);
      state.arete = 1;
      expect(checkSpheresDotLimit(spheres, state)).toStrictEqual(true);
    });
    it("Spheres equal to Arete - valid", () => {
      const spheres = R.clone(initialSpheres);
      spheres.correspondence = 1;
      const state = R.clone(initialMtAState);
      state.arete = 1;
      expect(checkSpheresDotLimit(spheres, state)).toStrictEqual(true);
    });
    it("Spheres greater than Arete - invalid", () => {
      const spheres = R.clone(initialSpheres);
      spheres.correspondence = 2;
      const state = R.clone(initialMtAState);
      state.arete = 1;
      expect(checkSpheresDotLimit(spheres, state)).toStrictEqual(false);
    });
  });
  describe("checkSpheres", () => {
    it("Spheres zero - invalid", () => {
      const spheres = R.clone(initialSpheres);
      expect(checkSpheres(spheres)).toStrictEqual({
        value: 0,
        checked: false,
      });
    });
    it("Small sphere points - invalid", () => {
      const spheres = R.clone(initialSpheres);
      spheres.correspondence = 1;
      spheres.entropy = 1;
      expect(checkSpheres(spheres)).toStrictEqual({
        value: 2,
        checked: false,
      });
    });
    it("Enough sphere points - valid", () => {
      const spheres = R.clone(initialSpheres);
      spheres.correspondence = 1;
      spheres.entropy = 2;
      spheres.forces = 3;
      expect(checkSpheres(spheres)).toStrictEqual({
        value: 6,
        checked: true,
      });
    });
    it("Too many sphere points - invalid", () => {
      const spheres = R.clone(initialSpheres);
      spheres.correspondence = 1;
      spheres.entropy = 2;
      spheres.forces = 3;
      spheres.life = 2;
      expect(checkSpheres(spheres)).toStrictEqual({
        value: 8,
        checked: false,
      });
    });
  });
});
