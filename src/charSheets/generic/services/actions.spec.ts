import * as R from "ramda";

import { capitalize } from "../../../lib/miscUtils";
import { CharSheet } from "../../root/domain";
import { CompositeReducer, initialCharSheet } from "../../root/services/public";

import { genericActions } from "./actions";

const { reduce } = new CompositeReducer<CharSheet>().assign(genericActions);

describe("genericActions", () => {
  it("setProfileItem", () => {
    expect(initialCharSheet.profile.clan).toBe("");
    const charSheet = reduce(initialCharSheet, {
      type: "setProfileItem",
      props: ["clan", "2233"],
    });
    expect(charSheet.profile.clan).toBe("2233");
  });

  it("setAttribute", () => {
    expect(initialCharSheet.attributes.appearance).toBe(1);
    const charSheet = reduce(initialCharSheet, {
      type: "setAttribute",
      props: ["appearance", 3],
    });
    expect(charSheet.attributes.appearance).toBe(3);
  });

  it("setAbility", () => {
    expect(initialCharSheet.abilities.academics).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setAbility",
      props: ["academics", 2],
    });
    expect(charSheet.abilities.academics).toBe(2);
  });

  it("setAbilityExtensionName", () => {
    expect(initialCharSheet.abilitiesExtension.knowledgeName1).toBe("");
    const charSheet = reduce(initialCharSheet, {
      type: "setAbilityExtensionName",
      props: ["knowledgeName1", "abc"],
    });
    expect(charSheet.abilitiesExtension.knowledgeName1).toBe("abc");
  });

  it("setAbilityExtensionValue", () => {
    expect(initialCharSheet.abilitiesExtension.knowledgeValue1).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setAbilityExtensionValue",
      props: ["knowledgeValue1", 4],
    });
    expect(charSheet.abilitiesExtension.knowledgeValue1).toBe(4);
  });

  it("setHealth", () => {
    expect(initialCharSheet.health.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setHealth",
      props: ["bruised", 1],
    });
    expect(charSheet.health.bruised).toBe(1);
  });
  it("setHealth overflow", () => {
    expect(initialCharSheet.health.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setHealth",
      props: ["bruised", 4],
    });
    expect(charSheet.health.bruised).toBe(3);
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

  it("setState willpower", () => {
    expect(initialCharSheet.state.willpowerPool).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "setState",
      props: ["willpowerPool", 8],
    });
    expect(charSheet.state.willpowerPool).toBe(8);
  });

  it("setState antithesis", () => {
    expect(initialCharSheet.state.antithesis).toBe("");
    const charSheet = reduce(initialCharSheet, {
      type: "setState",
      props: ["antithesis", "abn"],
    });
    expect(charSheet.state.antithesis).toBe("abn");
  });

  describe("set string values", () => {
    const stringValueNames = [
      "notes",
      "alliesAndContacts",
      "possessions",
      "appearanceDescription",
      "characterImage",
      "charHistory",
      "goals",
    ] as const;

    stringValueNames.forEach((stringValueName) => {
      it(`${stringValueName}`, () => {
        expect(initialCharSheet[stringValueName]).toBe("");
        const charSheet = reduce(initialCharSheet, {
          type: `set${capitalize(stringValueName)}` as `set${Capitalize<
            typeof stringValueName
          >}`,
          props: ["pepper"],
        });
        expect(charSheet[stringValueName]).toBe("pepper");
      });
    });
  });

  it("addMerit", () => {
    expect(initialCharSheet.merits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addMerit",
      props: [],
    });
    expect(charSheet.merits.length).toBe(1);
  });
  it("removeMerit", () => {
    expect(initialCharSheet.merits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addMerit",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeMerit",
      props: [0],
    });
    expect(charSheet2.merits.length).toBe(0);
  });
  it("setMerit", () => {
    expect(initialCharSheet.merits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addMerit",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setMerit",
      props: [0, "merit1"],
    });
    expect(charSheet2.merits).toEqual(["merit1"]);
  });

  it("addFlaw", () => {
    expect(initialCharSheet.flaws.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addFlaw",
      props: [],
    });
    expect(charSheet.flaws.length).toBe(1);
  });
  it("removeFlaw", () => {
    expect(initialCharSheet.flaws.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addFlaw",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeFlaw",
      props: [0],
    });
    expect(charSheet2.flaws.length).toBe(0);
  });
  it("setFlaw", () => {
    expect(initialCharSheet.flaws.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addFlaw",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setFlaw",
      props: [0, "flaw1"],
    });
    expect(charSheet2.flaws).toEqual(["flaw1"]);
  });

  it("addBackground", () => {
    expect(initialCharSheet.backgrounds.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addBackground",
      props: [],
    });
    expect(charSheet.backgrounds.length).toBe(1);
  });
  it("removeBackground", () => {
    expect(initialCharSheet.backgrounds.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addBackground",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeBackground",
      props: [0],
    });
    expect(charSheet2.backgrounds.length).toBe(0);
  });
  it("setBackgroundName", () => {
    expect(initialCharSheet.backgrounds.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addBackground",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setBackgroundName",
      props: [0, "bg1"],
    });
    expect(charSheet2.backgrounds).toEqual([{ name: "bg1", value: 0 }]);
  });
  it("setBackgroundValue", () => {
    expect(initialCharSheet.backgrounds.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addBackground",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setBackgroundValue",
      props: [0, 3],
    });
    expect(charSheet2.backgrounds).toEqual([{ name: "", value: 3 }]);
  });

  it("addOtherTrait", () => {
    expect(initialCharSheet.otherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addOtherTrait",
      props: [],
    });
    expect(charSheet.otherTraits.length).toBe(1);
  });
  it("removeOtherTrait", () => {
    expect(initialCharSheet.otherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addOtherTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "removeOtherTrait",
      props: [0],
    });
    expect(charSheet2.otherTraits.length).toBe(0);
  });
  it("setOtherTraitName", () => {
    expect(initialCharSheet.otherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addOtherTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setOtherTraitName",
      props: [0, "trait1"],
    });
    expect(charSheet2.otherTraits).toEqual([{ name: "trait1", value: 0 }]);
  });
  it("setOtherTraitValue", () => {
    expect(initialCharSheet.otherTraits.length).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: "addOtherTrait",
      props: [],
    });
    const charSheet2 = reduce(charSheet, {
      type: "setOtherTraitValue",
      props: [0, 3],
    });
    expect(charSheet2.otherTraits).toEqual([{ name: "", value: 3 }]);
  });

  it("setVirtue", () => {
    expect(initialCharSheet.virtues.courage).toBe(1);
    const charSheet = reduce(initialCharSheet, {
      type: "setVirtue",
      props: ["courage", 4],
    });
    expect(charSheet.virtues.courage).toBe(4);
  });
});
