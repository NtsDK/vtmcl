import * as R from "ramda";

import {
  initialArts,
  initialRealms,
  initialState,
} from "../../../charSheets/root/services/initialValues";

import {
  checkChangelingWillpower,
  checkGlamour,
  checkBanality,
  checkRealms,
  checkArts,
} from "./changelingCharacterChecks";

describe("Changeling character checks", () => {
  describe("checkChangelingWillpower", () => {
    it("willpowerRating = 0 - invalid", () => {
      const state = R.clone(initialState);
      expect(checkChangelingWillpower(state)).toStrictEqual(false);
    });
    it("willpowerRating = 4 - valid", () => {
      const state = R.clone(initialState);
      state.willpowerRating = 4;
      expect(checkChangelingWillpower(state)).toStrictEqual(true);
    });
    it("willpowerRating = 5 - invalid", () => {
      const state = R.clone(initialState);
      state.willpowerRating = 5;
      expect(checkChangelingWillpower(state)).toStrictEqual(false);
    });
  });
  describe("checkGlamour", () => {
    it("Banality = 0 - invalid", () => {
      const state = R.clone(initialState);
      expect(checkGlamour(state)).toStrictEqual(false);
    });
    it("Banality = 4 - valid", () => {
      const state = R.clone(initialState);
      state.glamourRating = 4;
      expect(checkGlamour(state)).toStrictEqual(true);
    });
    it("Banality = 5 - invalid", () => {
      const state = R.clone(initialState);
      state.glamourRating = 5;
      expect(checkGlamour(state)).toStrictEqual(false);
    });
  });
  describe("checkBanality", () => {
    it("Banality = 0 - invalid", () => {
      const state = R.clone(initialState);
      expect(checkBanality(state)).toStrictEqual(false);
    });
    it("Banality = 3 - valid", () => {
      const state = R.clone(initialState);
      state.banalityRating = 3;
      expect(checkBanality(state)).toStrictEqual(true);
    });
    it("Banality = 5 - invalid", () => {
      const state = R.clone(initialState);
      state.banalityRating = 5;
      expect(checkBanality(state)).toStrictEqual(false);
    });
  });
  describe("checkRealms", () => {
    it("Realms = 0 - invalid", () => {
      const realms = R.clone(initialRealms);
      expect(checkRealms(realms)).toStrictEqual({
        value: 0,
        checked: false,
      });
    });
    it("Realms = 2 - invalid", () => {
      const realms = R.clone(initialRealms);
      realms.actor = 2;
      expect(checkRealms(realms)).toStrictEqual({
        value: 2,
        checked: false,
      });
    });
    it("Realms = 5 - valid", () => {
      const realms = R.clone(initialRealms);
      realms.actor = 2;
      realms.fae = 3;
      expect(checkRealms(realms)).toStrictEqual({
        value: 5,
        checked: true,
      });
    });
    it("Realms = 7 - invalid", () => {
      const realms = R.clone(initialRealms);
      realms.actor = 2;
      realms.fae = 3;
      realms.prop = 2;
      expect(checkRealms(realms)).toStrictEqual({
        value: 7,
        checked: false,
      });
    });
  });
  describe("checkArts", () => {
    it("Arts zero - invalid", () => {
      const arts = R.clone(initialArts);
      expect(checkArts(arts)).toStrictEqual({
        value: 0,
        checked: false,
      });
    });
    it("Small discipline points - invalid", () => {
      const arts = R.clone(initialArts);
      arts.push(
        {
          name: "2233",
          value: 1,
        },
        {
          name: "223322",
          value: 1,
        }
      );
      expect(checkArts(arts)).toStrictEqual({
        value: 2,
        checked: false,
      });
    });
    it("Enough discipline points - valid", () => {
      const arts = R.clone(initialArts);
      arts.push(
        {
          name: "2233",
          value: 1,
        },
        {
          name: "223322",
          value: 2,
        }
      );
      expect(checkArts(arts)).toStrictEqual({
        value: 3,
        checked: true,
      });
    });
    it("Too many discipline points - invalid", () => {
      const arts = R.clone(initialArts);
      arts.push(
        {
          name: "2233",
          value: 3,
        },
        {
          name: "223322",
          value: 2,
        }
      );
      expect(checkArts(arts)).toStrictEqual({
        value: 5,
        checked: false,
      });
    });
  });
});
