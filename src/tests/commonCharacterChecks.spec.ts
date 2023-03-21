import * as R from 'ramda';
import { checkAbilitiesFilled } from "../domainServices";
import { vampireAbilitiesConfig } from '../i18nResources/presetSettings/vampireAbilitiesConfig';
import { initialAbilities } from '../services/initialValues';

describe('Common character checks', () => {

  it('Main abilities zero - valid', () => {
    const abilities = R.clone(initialAbilities);
    expect(checkAbilitiesFilled(abilities, vampireAbilitiesConfig))
      .toStrictEqual({
        "arr": [0, 0, 0],
        "checked": false
      });
  });

  it('Main abilities >3 - non valid', () => {
    const abilities = R.clone(initialAbilities);
    // abilities.academics = 5;
    expect(checkAbilitiesFilled(abilities, vampireAbilitiesConfig))
      .toStrictEqual({
        "arr": [0, 0, 0],
        "checked": false
      });
  });

});
