import * as R from "ramda";

import { CharSheet } from "../domain";

import { rootActions } from "./actions";
import { CompositeReducer } from "./CompositeReducer";
import { initialCharSheet } from "./initialValues";

const { reduce } = new CompositeReducer<CharSheet>().assign(rootActions);

describe("rootActions", () => {
  it("setCharSheet", () => {
    expect(initialCharSheet.preset).toBe("vampire_v20");
    const otherCharSheet = R.clone(initialCharSheet);
    otherCharSheet.charHistory = "history1";
    const charSheet = reduce(initialCharSheet, {
      type: "setCharSheet",
      props: [otherCharSheet],
    });
    const otherCharSheet2 = R.clone(initialCharSheet);
    otherCharSheet2.charHistory = "history1";
    expect(charSheet).toEqual(otherCharSheet2);
  });

  it("setPreset", () => {
    expect(initialCharSheet.preset).toBe("vampire_v20");
    const charSheet = reduce(initialCharSheet, {
      type: "setPreset",
      props: ["changeling_v20"],
    });
    expect(charSheet.preset).toBe("changeling_v20");
  });
});
