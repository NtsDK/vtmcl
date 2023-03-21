import * as R from 'ramda';
import { CharSheet } from "../domain";
import { commonActions } from "../services/commonActions";
import { CompositeReducer } from "../services/CompositeReducer";
import { initialCharSheet } from "../services/initialValues";

const { reduce } = new CompositeReducer<CharSheet>().assign(commonActions);

describe('Common char sheet part', () => {

  it('setPresetValue', () => {
    expect(initialCharSheet.preset).toBe('vampire_v20');
    const charSheet = reduce(initialCharSheet, {
      type: 'setPresetValue',
      props: ['changeling_v20']
    });
    expect(charSheet.preset).toBe('changeling_v20');
  });

  it('setProfileItem', () => {
    expect(initialCharSheet.profile.clan).toBe('');
    const charSheet = reduce(initialCharSheet, {
      type: 'setProfileItem',
      props: ['clan', '2233']
    });
    expect(charSheet.profile.clan).toBe('2233');
  });

  it('setAttribute', () => {
    expect(initialCharSheet.attributes.appearance).toBe(1);
    const charSheet = reduce(initialCharSheet, {
      type: 'setAttribute',
      props: ['appearance', 3]
    });
    expect(charSheet.attributes.appearance).toBe(3);
  });

  it('setAbility', () => {
    expect(initialCharSheet.abilities.academics).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setAbility',
      props: ['academics', 2]
    });
    expect(charSheet.abilities.academics).toBe(2);
  });

  it('setAbilityExtensionName', () => {
    expect(initialCharSheet.abilitiesExtension.knowledgeName1).toBe('');
    const charSheet = reduce(initialCharSheet, {
      type: 'setAbilityExtensionName',
      props: ['knowledgeName1', 'abc']
    });
    expect(charSheet.abilitiesExtension.knowledgeName1).toBe('abc');
  });

  it('setAbilityExtensionValue', () => {
    expect(initialCharSheet.abilitiesExtension.knowledgeValue1).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setAbilityExtensionValue',
      props: ['knowledgeValue1', 4]
    });
    expect(charSheet.abilitiesExtension.knowledgeValue1).toBe(4);
  });
  it('setVirtue', () => {
    expect(initialCharSheet.virtues.courage).toBe(1);
    const charSheet = reduce(initialCharSheet, {
      type: 'setVirtue',
      props: ['courage', 4]
    });
    expect(charSheet.virtues.courage).toBe(4);
  });
  it('setRealm', () => {
    expect(initialCharSheet.realms.nature).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setRealm',
      props: ['nature', 4]
    });
    expect(charSheet.realms.nature).toBe(4);
  });
  it('setHealth', () => {
    expect(initialCharSheet.health.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setHealth',
      props: ['bruised', 1]
    });
    expect(charSheet.health.bruised).toBe(1);
  });
  it('setHealth overflow', () => {
    expect(initialCharSheet.health.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setHealth',
      props: ['bruised', 4]
    });
    expect(charSheet.health.bruised).toBe(3);
  });
  it('setHealthChimerical', () => {
    expect(initialCharSheet.healthChimerical.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setHealthChimerical',
      props: ['bruised', 1]
    });
    expect(charSheet.healthChimerical.bruised).toBe(1);
  });
  it('setHealthChimerical overflow', () => {
    expect(initialCharSheet.healthChimerical.bruised).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setHealthChimerical',
      props: ['bruised', 4]
    });
    expect(charSheet.healthChimerical.bruised).toBe(3);
  });
  it('setState antithesis', () => {
    expect(initialCharSheet.state.antithesis).toBe("");
    const charSheet = reduce(initialCharSheet, {
      type: 'setState',
      props: ['antithesis', 'abn']
    });
    expect(charSheet.state.antithesis).toBe('abn');
  });
  it('setState willpower', () => {
    expect(initialCharSheet.state.willpowerPool).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setState',
      props: ['willpowerPool', 8]
    });
    expect(charSheet.state.willpowerPool).toBe(8);
  });
  it('setStringItem notes', () => {
    expect(initialCharSheet.notes).toBe(0);
    const charSheet = reduce(initialCharSheet, {
      type: 'setState',
      props: ['willpowerPool', 8]
    });
    expect(charSheet.state.willpowerPool).toBe(8);
  });

//   type StringValueNames = Extract<keyof CharSheet,
//   | 'notes'
//   | 'alliesAndContacts'
//   | 'possessions'
//   | 'appearanceDescription'
//   | 'characterImage'
//   | 'charHistory'
//   | 'goals'
// >;


});
