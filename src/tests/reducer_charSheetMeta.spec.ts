import * as R from 'ramda';
import { CharSheet } from "../domain";
import { charSheetMetaActions } from '../services/actions_charSheetMeta';
import { CompositeReducer } from "../services/CompositeReducer";
import { defaultBackgroundUrl } from '../services/defaultBackground';
import { initialCharSheet } from "../services/initialValues";

const { reduce } = new CompositeReducer<CharSheet>().assign(charSheetMetaActions);

describe('charSheetMetaActions', () => {

  it('setCharSheet', () => {
    expect(initialCharSheet.preset).toBe('vampire_v20');
    const otherCharSheet = R.clone(initialCharSheet);
    otherCharSheet.charHistory = 'history1';
    const charSheet = reduce(initialCharSheet, {
      type: 'setCharSheet',
      props: [otherCharSheet]
    });
    const otherCharSheet2 = R.clone(initialCharSheet);
    otherCharSheet2.charHistory = 'history1';
    expect(charSheet).toEqual(otherCharSheet2);
  });

  it('setPresetValue', () => {
    expect(initialCharSheet.preset).toBe('vampire_v20');
    const charSheet = reduce(initialCharSheet, {
      type: 'setPresetValue',
      props: ['changeling_v20']
    });
    expect(charSheet.preset).toBe('changeling_v20');
  });

  it('setBackgroundColor', () => {
    expect(initialCharSheet.settings.backgroundColor).toBe('#ababab');
    const charSheet = reduce(initialCharSheet, {
      type: 'setBackgroundColor',
      props: ['#ffabab']
    });
    expect(charSheet.settings.backgroundColor).toBe('#ffabab');
  });

  it('setCharsheetBackColor', () => {
    expect(initialCharSheet.settings.charsheetBackColor).toBe('#ffffff');
    const charSheet = reduce(initialCharSheet, {
      type: 'setCharsheetBackColor',
      props: ['#00ff00']
    });
    expect(charSheet.settings.charsheetBackColor).toBe('#00ff00');
  });

  it('setCharsheetBackImage', () => {
    expect(initialCharSheet.settings.charsheetBackImage_v2).toBe(defaultBackgroundUrl);
    const charSheet = reduce(initialCharSheet, {
      type: 'setCharsheetBackImage',
      props: ['url']
    });
    expect(charSheet.settings.charsheetBackImage_v2).toBe('url');
  });

  it('setCharsheetBackMode', () => {
    expect(initialCharSheet.settings.charsheetBackMode).toBe('charsheet-image');
    const charSheet = reduce(initialCharSheet, {
      type: 'setCharsheetBackMode',
      props: ['charsheet-none']
    });
    expect(charSheet.settings.charsheetBackMode).toBe('charsheet-none');
  });

});
