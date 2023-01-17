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
  if (charSheet.Version === '0.2.1') {
    // state structure change
    charSheet.Charsheet.state.pathName = '';
    charSheet.Charsheet.state.bearingName = '';
    charSheet.Charsheet.state.bearingModifier = '';

    charSheet.Charsheet.state.willpowerRating = charSheet.Charsheet.state.willpower;
    delete charSheet.Charsheet.state.willpower;
    charSheet.Charsheet.state.willpowerPool = charSheet.Charsheet.state.willpower2;
    delete charSheet.Charsheet.state.willpower2;

    charSheet.Charsheet.state.bloodPerTurn = '';
    charSheet.Charsheet.state.weakness = '';
    charSheet.Charsheet.state.experience = '';

    // add abilitiesExtension
    charSheet.Charsheet.abilitiesExtension = {
      talentName1: "",
      talentValue1: 0,
      talentName2: "",
      talentValue2: 0,
      skillName1: "",
      skillValue1: 0,
      skillName2: "",
      skillValue2: 0,
      knowledgeName1: "",
      knowledgeValue1: 0,
      knowledgeName2: "",
      knowledgeValue2: 0,
    };

    charSheet.Version = '0.2.4';
  }

  if (charSheet.Version === '0.2.4') {
    charSheet.Charsheet.preset = 'vampire_v20';

    charSheet.Charsheet.profile.court = '';
    charSheet.Charsheet.profile.house = '';
    charSheet.Charsheet.profile.kith = '';
    charSheet.Charsheet.profile.primaryLegacy = '';
    charSheet.Charsheet.profile.secondaryLegacy = '';
    charSheet.Charsheet.profile.motley = '';
    charSheet.Charsheet.profile.seeming = '';

    charSheet.Charsheet.abilities.kenning = 0;
    charSheet.Charsheet.abilities.enigmas = 0;
    charSheet.Charsheet.abilities.gremayre = 0;

    charSheet.Charsheet.arts = [];
    charSheet.Charsheet.realms = {
      actor: 0,
      fae: 0,
      nature: 0,
      prop: 0,
      scene: 0,
      time: 0,
    };

    charSheet.Charsheet.state.antithesis = '';
    charSheet.Charsheet.state.thresholds = '';
    charSheet.Charsheet.state.birthrightsFrailties = '';

    charSheet.Charsheet.state.glamourRating = 0;
    charSheet.Charsheet.state.glamourPool = 0;
    charSheet.Charsheet.state.banalityRating = 0;
    charSheet.Charsheet.state.banalityPool = 0;
    charSheet.Charsheet.state.nightmare = 0;

    charSheet.Charsheet.healthChimerical = {
      bruised: 0,
      hurt: 0,
      injured: 0,
      wounded: 0,
      mauled: 0,
      crippled: 0,
      incapacitated: 0
    };

    charSheet.Version = '0.2.5';
  }
  if (charSheet.Version === '0.2.5') {
    charSheet.Version = '0.3.0';
  }
  if (charSheet.Version === '0.3.0') {
    charSheet.Charsheet.charHistory = '';
    charSheet.Charsheet.goals = '';
    charSheet.Charsheet.appearanceDescription = '';
    charSheet.Charsheet.characterImage = '';
    charSheet.Charsheet.alliesAndContacts = '';
    charSheet.Charsheet.possessions = '';
    charSheet.Charsheet.disciplinePaths = [];
    charSheet.Charsheet.rituals = [];
    charSheet.Charsheet.otherTraits = [];
    charSheet.Version = '0.4.0';
  }
  return charSheet;
}
