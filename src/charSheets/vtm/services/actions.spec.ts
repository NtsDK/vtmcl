import * as R from "ramda";

import { CharSheet } from "../../root/domain";
import { CompositeReducer, initialCharSheet } from "../../root/services/public";

import { vtmActions } from "./actions";

const { reduce } = new CompositeReducer<CharSheet>().assign(vtmActions);

describe("vtmActions", () => {
  it("addDiscipline", () => {
    expect(initialCharSheet.disciplines.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDiscipline",
      props: [],
    });
    expect(charSheet.disciplines.length).toBe(1);
  });
  it("removeDiscipline", () => {
    expect(initialCharSheet.disciplines.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDiscipline",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeDiscipline",
      props: [0],
    });
    expect(charSheet2.disciplines.length).toBe(0);
  });
  it("setDisciplineName", () => {
    expect(initialCharSheet.disciplines.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDiscipline",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setDisciplineName",
      props: [0, "discipline1"],
    });
    expect(charSheet2.disciplines).toEqual([{ name: "discipline1", value: 0 }]);
  });
  it("setDisciplineValue", () => {
    expect(initialCharSheet.disciplines.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDiscipline",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setDisciplineValue",
      props: [0, 3],
    });
    expect(charSheet2.disciplines).toEqual([{ name: "", value: 3 }]);
  });

  it("addDisciplinePath", () => {
    expect(initialCharSheet.disciplinePaths.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDisciplinePath",
      props: [],
    });
    expect(charSheet.disciplinePaths.length).toBe(1);
  });
  it("removeDisciplinePath", () => {
    expect(initialCharSheet.disciplinePaths.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDisciplinePath",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeDisciplinePath",
      props: [0],
    });
    expect(charSheet2.disciplinePaths.length).toBe(0);
  });
  it("setDisciplinePathName", () => {
    expect(initialCharSheet.disciplinePaths.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDisciplinePath",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setDisciplinePathName",
      props: [0, "disciplinePath1"],
    });
    expect(charSheet2.disciplinePaths).toEqual([
      { name: "disciplinePath1", value: 0 },
    ]);
  });
  it("setDisciplinePathValue", () => {
    expect(initialCharSheet.disciplinePaths.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addDisciplinePath",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setDisciplinePathValue",
      props: [0, 3],
    });
    expect(charSheet2.disciplinePaths).toEqual([{ name: "", value: 3 }]);
  });

  it("addRitual", () => {
    expect(initialCharSheet.rituals.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addRitual",
      props: [],
    });
    expect(charSheet.rituals.length).toBe(1);
  });
  it("removeRitual", () => {
    expect(initialCharSheet.rituals.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addRitual",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeRitual",
      props: [0],
    });
    expect(charSheet2.rituals.length).toBe(0);
  });
  it("setRitualName", () => {
    expect(initialCharSheet.rituals.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addRitual",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setRitualName",
      props: [0, "ritual1"],
    });
    expect(charSheet2.rituals).toEqual([{ name: "ritual1", level: "" }]);
  });
  it("setRitualLevel", () => {
    expect(initialCharSheet.rituals.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addRitual",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setRitualLevel",
      props: [0, "7"],
    });
    expect(charSheet2.rituals).toEqual([{ name: "", level: "7" }]);
  });
});
