import * as R from "ramda";
import {
  checkAbilitiesFilled,
  EXPECTED_ABILITY_DOTS,
  checkAbilitiesDotLimit,
  ABILITY_LIMIT,
  checkAttributesFilled,
  EXPECTED_ATTRIBUTE_DOTS,
} from "../domainServices";
import { attributesConfig } from "../i18nResources/presetSettings/attributesConfig";
import { vampireAbilitiesConfig } from "../i18nResources/presetSettings/vampireAbilitiesConfig";
import {
  initialAbilities,
  initialAbilitiesExtension,
  initialAttributes,
} from "../services/initialValues";

describe("Common character checks", () => {
  describe("checkAttributesFilled", () => {
    it("Attributes zero - invalid", () => {
      const attributes = R.clone(initialAttributes);
      expect(
        checkAttributesFilled(
          attributes,
          attributesConfig,
          EXPECTED_ATTRIBUTE_DOTS
        )
      ).toStrictEqual({
        arr: [0, 0, 0],
        checked: false,
      });
    });
    it("Attributes small non zero - invalid", () => {
      const attributes = R.clone(initialAttributes);
      attributes.strength = 3;
      attributes.charisma = 3;
      attributes.perception = 3;

      expect(
        checkAttributesFilled(
          attributes,
          attributesConfig,
          EXPECTED_ATTRIBUTE_DOTS
        )
      ).toStrictEqual({
        arr: [2, 2, 2],
        checked: false,
      });
    });
    it("Attributes filled right - valid", () => {
      const attributes = R.clone(initialAttributes);
      attributes.strength = 4;
      attributes.charisma = 3;
      attributes.manipulation = 4;
      attributes.perception = 3;
      attributes.intelligence = 3;
      attributes.wits = 4;

      expect(
        checkAttributesFilled(
          attributes,
          attributesConfig,
          EXPECTED_ATTRIBUTE_DOTS
        )
      ).toStrictEqual({
        arr: [7, 5, 3],
        checked: true,
      });
    });
    it("Attributes filled to much - invalid", () => {
      const attributes = R.clone(initialAttributes);
      attributes.strength = 4;
      attributes.dexterity = 4;
      attributes.stamina = 4;
      attributes.charisma = 3;
      attributes.manipulation = 4;
      attributes.perception = 3;
      attributes.intelligence = 3;
      attributes.wits = 4;

      expect(
        checkAttributesFilled(
          attributes,
          attributesConfig,
          EXPECTED_ATTRIBUTE_DOTS
        )
      ).toStrictEqual({
        arr: [9, 7, 5],
        checked: false,
      });
    });
  });

  describe("checkAbilitiesFilled", () => {
    it("Main abilities zero - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      expect(
        checkAbilitiesFilled(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          EXPECTED_ABILITY_DOTS
        )
      ).toStrictEqual({
        arr: [0, 0, 0],
        checked: false,
      });
    });

    it("Main abilities sums are less than limits - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      abilities.academics = 5;
      abilities.larceny = 1;
      abilities.law = 2;
      expect(
        checkAbilitiesFilled(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          EXPECTED_ABILITY_DOTS
        )
      ).toStrictEqual({
        arr: [7, 1, 0],
        checked: false,
      });
    });

    it("Main abilities sums are more than limits - invalid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      abilities.athletics = 3;
      abilities.alertness = 3;
      abilities.brawl = 3;
      abilities.intimidation = 3;
      abilities.expression = 3;
      abilities.leadership = 3;
      expect(
        checkAbilitiesFilled(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          EXPECTED_ABILITY_DOTS
        )
      ).toStrictEqual({
        arr: [18, 0, 0],
        checked: false,
      });
    });

    it("Extra abilities zero - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      expect(
        checkAbilitiesFilled(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          EXPECTED_ABILITY_DOTS
        )
      ).toStrictEqual({
        arr: [0, 0, 0],
        checked: false,
      });
    });

    it("Extra abilities sums are less than limits - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      abilitiesExtension.knowledgeValue1 = 3;
      abilitiesExtension.knowledgeValue2 = 3;
      expect(
        checkAbilitiesFilled(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          EXPECTED_ABILITY_DOTS
        )
      ).toStrictEqual({
        arr: [6, 0, 0],
        checked: false,
      });
    });
  });

  // checkAbilitiesDotLimit,
  // ABILITY_LIMIT,

  describe("checkAbilitiesDotLimit", () => {
    it("Default abilities and extra abilities are less than ABILITY_LIMIT - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      expect(
        checkAbilitiesDotLimit(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          ABILITY_LIMIT
        )
      ).toStrictEqual(true);
    });

    it("Main abilities are less or equal to ABILITY_LIMIT - valid", () => {
      const abilities = R.clone(initialAbilities);
      abilities.academics = 1;
      abilities.alertness = 2;
      abilities.animalken = 3;
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      expect(
        checkAbilitiesDotLimit(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          ABILITY_LIMIT
        )
      ).toStrictEqual(true);
    });
    it("Main ability is greater than ABILITY_LIMIT - invalid", () => {
      const abilities = R.clone(initialAbilities);
      abilities.academics = 4;
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      expect(
        checkAbilitiesDotLimit(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          ABILITY_LIMIT
        )
      ).toStrictEqual(false);
    });

    it("Extra abilities are less or equal to ABILITY_LIMIT - valid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      abilitiesExtension.knowledgeValue1 = 1;
      abilitiesExtension.knowledgeValue2 = 2;
      abilitiesExtension.skillValue1 = 3;
      expect(
        checkAbilitiesDotLimit(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          ABILITY_LIMIT
        )
      ).toStrictEqual(true);
    });
    it("Extra ability is bigger than ABILITY_LIMIT - invalid", () => {
      const abilities = R.clone(initialAbilities);
      const abilitiesExtension = R.clone(initialAbilitiesExtension);
      abilitiesExtension.knowledgeValue1 = 4;
      expect(
        checkAbilitiesDotLimit(
          abilities,
          vampireAbilitiesConfig,
          abilitiesExtension,
          ABILITY_LIMIT
        )
      ).toStrictEqual(false);
    });
  });
});
