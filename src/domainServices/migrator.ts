import * as R from 'ramda';
import { defaultBackgroundUrl } from '../services/defaultBackground';

export function migrate(charSheetSrc: any): unknown {
  let charSheet = R.clone(charSheetSrc);
  if (charSheet.Version === '0.1.1') {
    delete charSheet.Meta;
    delete charSheet.Log;
    charSheet.Charsheet.health = charSheet.Charsheet.state.health;
    delete charSheet.Charsheet.state.health;
    charSheet.Charsheet.disciplines = Object.entries(charSheet.Charsheet.disciplines).map(el => ({name: el[0], value: el[1]}));
    charSheet.Charsheet.backgrounds = Object.entries(charSheet.Charsheet.backgrounds).map(el => ({name: el[0], value: el[1]}));
    charSheet.Charsheet.merits = Object.entries(charSheet.Charsheet.merits).map(el => el[0]);
    charSheet.Charsheet.flaws = Object.entries(charSheet.Charsheet.flaws).map(el => el[0]);
    charSheet.Version = '0.2.0';
  }
  if (charSheet.Version === '0.2.0') {
    const data = charSheet.Settings.charsheetBackImage;
    delete charSheet.Settings.charsheetBackImage;
    if (data === "../images/back.png") {
      charSheet.Settings.charsheetBackImage_v2 = defaultBackgroundUrl;
    } else {
      charSheet.Settings.charsheetBackImage_v2 = data;
    }
    charSheet.Version = '0.2.1';
  }
  return charSheet;
}