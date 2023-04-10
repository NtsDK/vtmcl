import * as R from "ramda";
import { checkArts, checkRealms } from "../domainServices";
import { initialArts, initialRealms } from "../services/initialValues";
describe("Changeling character checks", () => {
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
