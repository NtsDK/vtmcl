import * as R from "ramda";

import { CharSheet } from "../../root/domain";
import { CompositeReducer, initialCharSheet } from "../../root/services/public";

import { ctdActions } from "./actions";

const { reduce } = new CompositeReducer<CharSheet>().assign(ctdActions);

describe("ctdActions", () => {
  it("setRealm", () => {
    expect(initialCharSheet.realms.nature).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setRealm",
      props: ["nature", 4],
    });
    expect(charSheet.realms.nature).toBe(4);
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
