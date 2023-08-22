import * as R from "ramda";

import { initialVirtues } from "../../generic/services/initialValues";
import { initialDisciplines, initialVtMState } from "../services/initialValues";

import {
  checkBloodpool,
  checkVampireWillpower,
  checkHumanity,
  checkDisciplines,
  EXPECTED_DISCIPLINE_DOTS,
} from "./index";

describe("Vampire character checks", () => {
  describe("checkBloodpool", () => {
    it("bloodpool = 0 - invalid", () => {
      const state = R.clone(initialVtMState);
      expect(checkBloodpool(state)).toStrictEqual(false);
    });
    it("bloodpool = 1 - valid", () => {
      const state = R.clone(initialVtMState);
      state.bloodpool = 1;
      expect(checkBloodpool(state)).toStrictEqual(true);
    });
    it("bloodpool = 10 - valid", () => {
      const state = R.clone(initialVtMState);
      state.bloodpool = 10;
      expect(checkBloodpool(state)).toStrictEqual(true);
    });
    it("bloodpool = 12 - invalid", () => {
      const state = R.clone(initialVtMState);
      state.bloodpool = 12;
      expect(checkBloodpool(state)).toStrictEqual(false);
    });
  });
  describe("checkVampireWillpower", () => {
    it("Initial courage and zero willpower - invalid", () => {
      const state = R.clone(initialVtMState);
      const virtues = R.clone(initialVirtues);
      expect(checkVampireWillpower(state, virtues)).toStrictEqual(false);
    });
    it("Initial courage and willpower = 1 - valid", () => {
      const state = R.clone(initialVtMState);
      state.willpowerRating = 1;
      const virtues = R.clone(initialVirtues);
      expect(checkVampireWillpower(state, virtues)).toStrictEqual(true);
    });
    it("Initial courage and willpower = 3 - invalid", () => {
      const state = R.clone(initialVtMState);
      state.willpowerRating = 3;
      const virtues = R.clone(initialVirtues);
      expect(checkVampireWillpower(state, virtues)).toStrictEqual(false);
    });
    it("courage = 3 and willpower = 3 - valid", () => {
      const state = R.clone(initialVtMState);
      state.willpowerRating = 3;
      const virtues = R.clone(initialVirtues);
      virtues.courage = 3;
      expect(checkVampireWillpower(state, virtues)).toStrictEqual(true);
    });
  });
  describe("checkHumanity", () => {
    it("Initial virtues and zero humanity - invalid", () => {
      const state = R.clone(initialVtMState);
      const virtues = R.clone(initialVirtues);
      expect(checkHumanity(state, virtues)).toStrictEqual(false);
    });
    it("Initial virtues and humanity 2 - valid", () => {
      const state = R.clone(initialVtMState);
      state.humanity = 2;
      const virtues = R.clone(initialVirtues);
      expect(checkHumanity(state, virtues)).toStrictEqual(true);
    });
    it("Initial virtues and non zero humanity - invalid", () => {
      const state = R.clone(initialVtMState);
      state.humanity = 5;
      const virtues = R.clone(initialVirtues);
      expect(checkHumanity(state, virtues)).toStrictEqual(false);
    });
    it("Extended virtues and non zero humanity - invalid", () => {
      const state = R.clone(initialVtMState);
      state.humanity = 5;
      const virtues = R.clone(initialVirtues);
      virtues.conscience = 3;
      virtues.self_control = 2;
      expect(checkHumanity(state, virtues)).toStrictEqual(true);
    });
  });

  describe("checkDisciplines", () => {
    it("Disciplines zero - invalid", () => {
      const disciplines = R.clone(initialDisciplines);
      expect(
        checkDisciplines(disciplines, EXPECTED_DISCIPLINE_DOTS)
      ).toStrictEqual({
        value: 0,
        checked: false,
      });
    });
    it("Small discipline points - invalid", () => {
      const disciplines = R.clone(initialDisciplines);
      disciplines.push(
        {
          name: "2233",
          value: 1,
        },
        {
          name: "223322",
          value: 1,
        }
      );
      expect(
        checkDisciplines(disciplines, EXPECTED_DISCIPLINE_DOTS)
      ).toStrictEqual({
        value: 2,
        checked: false,
      });
    });
    it("Enough discipline points - valid", () => {
      const disciplines = R.clone(initialDisciplines);
      disciplines.push(
        {
          name: "2233",
          value: 1,
        },
        {
          name: "223322",
          value: 2,
        }
      );
      expect(
        checkDisciplines(disciplines, EXPECTED_DISCIPLINE_DOTS)
      ).toStrictEqual({
        value: 3,
        checked: true,
      });
    });
    it("Too many discipline points - invalid", () => {
      const disciplines = R.clone(initialDisciplines);
      disciplines.push(
        {
          name: "2233",
          value: 3,
        },
        {
          name: "223322",
          value: 2,
        }
      );
      expect(
        checkDisciplines(disciplines, EXPECTED_DISCIPLINE_DOTS)
      ).toStrictEqual({
        value: 5,
        checked: false,
      });
    });
  });
});
