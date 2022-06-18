import * as R from 'ramda';
import { CharSheet } from '../../domain/charSheet';

import { CharSheetInJson } from "./types";

export function charSheetToJson(charSheet: CharSheet): CharSheetInJson {
  return {
    Settings: charSheet.Settings,
    Version: charSheet.Version,
    Charsheet: {
      profile: charSheet.profile,
      abilities: charSheet.abilities,
      attributes: charSheet.attributes,
      backgrounds: charSheet.backgrounds,
      disciplines: charSheet.disciplines,
      flaws: charSheet.flaws,
      merits: charSheet.merits,
      notes: charSheet.notes,
      virtues: charSheet.virtues,
      state: {
        ...charSheet.state,
      },
      health: charSheet.health
    },
  };
}

export function charSheetFromJson(charSheetInJson: CharSheetInJson): CharSheet {
  return {
    Settings: charSheetInJson.Settings,
    Version: charSheetInJson.Version,
    // character
    profile: charSheetInJson.Charsheet.profile,
    abilities: charSheetInJson.Charsheet.abilities,
    attributes: charSheetInJson.Charsheet.attributes,
    backgrounds: charSheetInJson.Charsheet.backgrounds,
    disciplines: charSheetInJson.Charsheet.disciplines,
    flaws: charSheetInJson.Charsheet.flaws,
    merits: charSheetInJson.Charsheet.merits,
    notes: charSheetInJson.Charsheet.notes,
    virtues: charSheetInJson.Charsheet.virtues,
    state: charSheetInJson.Charsheet.state,
    health: charSheetInJson.Charsheet.health
  };
}