import * as R from "ramda";

import { CharSheet } from "../../root/domain";
import { CompositeReducer, initialCharSheet } from "../../root/services/public";

import { mtaActions } from "./actions";

const { reduce } = new CompositeReducer<CharSheet>().assign(mtaActions);

describe("mtaActions", () => {
  it("setSphere", () => {
    expect(initialCharSheet.spheres.entropy).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setSphere",
      props: ["entropy", 4],
    });
    expect(charSheet.spheres.entropy).toBe(4);
  });
});
