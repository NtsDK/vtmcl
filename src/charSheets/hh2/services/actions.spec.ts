import * as R from "ramda";

import { CharSheet } from "../../root/domain";
import { CompositeReducer, initialCharSheet } from "../../root/services/public";

import { hh2Actions } from "./actions";

const { reduce } = new CompositeReducer<CharSheet>().assign(hh2Actions);

describe("hh2Actions", () => {
  it("addNuminaOrTrait", () => {
    expect(initialCharSheet.numinaAndOtherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addNuminaOrTrait",
      props: [],
    });
    expect(charSheet.numinaAndOtherTraits.length).toBe(1);
  });
  it("removeNuminaOrTrait", () => {
    expect(initialCharSheet.numinaAndOtherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addNuminaOrTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeNuminaOrTrait",
      props: [0],
    });
    expect(charSheet2.numinaAndOtherTraits.length).toBe(0);
  });
  it("setNuminaOrTraitName", () => {
    expect(initialCharSheet.numinaAndOtherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addNuminaOrTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setNuminaOrTraitName",
      props: [0, "numina1"],
    });
    expect(charSheet2.numinaAndOtherTraits).toEqual([
      { name: "numina1", value: 0 },
    ]);
  });
  it("setNuminaOrTraitValue", () => {
    expect(initialCharSheet.numinaAndOtherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addNuminaOrTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setNuminaOrTraitValue",
      props: [0, 3],
    });
    expect(charSheet2.numinaAndOtherTraits).toEqual([{ name: "", value: 3 }]);
  });
});
