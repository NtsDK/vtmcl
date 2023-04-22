import * as R from "ramda";
import { CharSheet } from "../domain";
import { ctdPartActions } from "./actions_ctdParts";
import { CompositeReducer } from "./CompositeReducer";
import { initialCharSheet } from "./initialValues";

const { reduce } = new CompositeReducer<CharSheet>().assign(ctdPartActions);

describe("ctdPartActions", () => {
  it("setRealm", () => {
    expect(initialCharSheet.realms.nature).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setRealm",
      props: ["nature", 4],
    });
    expect(charSheet.realms.nature).toBe(4);
  });

  it("setHealthChimerical", () => {
    expect(initialCharSheet.healthChimerical.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setHealthChimerical",
      props: ["bruised", 1],
    });
    expect(charSheet.healthChimerical.bruised).toBe(1);
  });
  it("setHealthChimerical overflow", () => {
    expect(initialCharSheet.healthChimerical.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setHealthChimerical",
      props: ["bruised", 4],
    });
    expect(charSheet.healthChimerical.bruised).toBe(3);
  });

  it("addArt", () => {
    expect(initialCharSheet.arts.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addArt",
      props: [],
    });
    expect(charSheet.arts.length).toBe(1);
  });
  it("removeArt", () => {
    expect(initialCharSheet.arts.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addArt",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeArt",
      props: [0],
    });
    expect(charSheet2.arts.length).toBe(0);
  });
  it("setArtName", () => {
    expect(initialCharSheet.arts.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addArt",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setArtName",
      props: [0, "art1"],
    });
    expect(charSheet2.arts).toEqual([{ name: "art1", value: 0 }]);
  });
  it("setArtValue", () => {
    expect(initialCharSheet.arts.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addArt",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setArtValue",
      props: [0, 3],
    });
    expect(charSheet2.arts).toEqual([{ name: "", value: 3 }]);
  });
});
