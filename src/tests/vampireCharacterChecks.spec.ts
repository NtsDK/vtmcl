import * as R from "ramda";
import { checkDisciplines, checkVirtues } from "../domainServices";
import { initialDisciplines, initialVirtues } from "../services/initialValues";

describe("Vampire character checks", () => {
  describe("checkVirtues", () => {
    it("Virtues zero - invalid", () => {
      const virtues = R.clone(initialVirtues);
      expect(checkVirtues(virtues)).toStrictEqual({
        value: 0,
        checked: false,
      });
    });
    it("Virtues not enough - invalid", () => {
      const virtues = R.clone(initialVirtues);
      virtues.conscience = 4;
      expect(checkVirtues(virtues)).toStrictEqual({
        value: 3,
        checked: false,
      });
    });
    it("Virtues enough - valid", () => {
      const virtues = R.clone(initialVirtues);
      virtues.conscience = 4;
      virtues.courage = 4;
      virtues.self_control = 2;
      expect(checkVirtues(virtues)).toStrictEqual({
        value: 7,
        checked: true,
      });
    });
    it("Virtues too many - invalid", () => {
      const virtues = R.clone(initialVirtues);
      virtues.conscience = 4;
      virtues.courage = 4;
      virtues.self_control = 4;
      expect(checkVirtues(virtues)).toStrictEqual({
        value: 9,
        checked: false,
      });
    });
  });
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
