import * as R from "ramda";
import { checkDisciplines } from "../domainServices";
import { initialDisciplines } from "../services/initialValues";

describe("Vampire character checks", () => {
  describe("checkDisciplines", () => {
    it("Disciplines zero - invalid", () => {
      const disciplines = R.clone(initialDisciplines);
      expect(checkDisciplines(disciplines)).toStrictEqual({
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
      expect(checkDisciplines(disciplines)).toStrictEqual({
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
      expect(checkDisciplines(disciplines)).toStrictEqual({
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
      expect(checkDisciplines(disciplines)).toStrictEqual({
        value: 5,
        checked: false,
      });
    });
  });
});
