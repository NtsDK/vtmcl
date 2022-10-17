import * as R from 'ramda';
import { CharSheet } from '../../domain/charSheet';

import { CharSheetInJson } from "./types";

export function charSheetToJson(charSheet: CharSheet): CharSheetInJson {
  return {
    Settings: charSheet.Settings,
    Version: charSheet.Version,
    Charsheet: {
      preset: charSheet.preset,
      profile: charSheet.profile,
      abilities: charSheet.abilities,
      abilitiesExtension: charSheet.abilitiesExtension,
      attributes: charSheet.attributes,
      backgrounds: charSheet.backgrounds,
      disciplines: charSheet.disciplines,
      disciplinePaths: charSheet.disciplinePaths,
      rituals: charSheet.rituals,
      flaws: charSheet.flaws,
      merits: charSheet.merits,
      notes: charSheet.notes,
      charHistory: charSheet.charHistory,
      goals: charSheet.goals,
      virtues: charSheet.virtues,
      state: {
        ...charSheet.state,
      },
      health: charSheet.health,
      healthChimerical: charSheet.healthChimerical,
      arts: charSheet.arts,
      realms: charSheet.realms,
    },
  };
}

export function charSheetFromJson(charSheetInJson: CharSheetInJson): CharSheet {
  return {
    Settings: charSheetInJson.Settings,
    Version: charSheetInJson.Version,
    // character
    preset: charSheetInJson.Charsheet.preset,
    profile: charSheetInJson.Charsheet.profile,
    abilities: charSheetInJson.Charsheet.abilities,
    abilitiesExtension: charSheetInJson.Charsheet.abilitiesExtension,
    attributes: charSheetInJson.Charsheet.attributes,
    backgrounds: charSheetInJson.Charsheet.backgrounds,
    disciplines: charSheetInJson.Charsheet.disciplines,
    disciplinePaths: charSheetInJson.Charsheet.disciplinePaths,
    rituals: charSheetInJson.Charsheet.rituals,
    flaws: charSheetInJson.Charsheet.flaws,
    merits: charSheetInJson.Charsheet.merits,
    notes: charSheetInJson.Charsheet.notes,
    goals: charSheetInJson.Charsheet.goals,
    charHistory: charSheetInJson.Charsheet.charHistory,
    virtues: charSheetInJson.Charsheet.virtues,
    state: charSheetInJson.Charsheet.state,
    health: charSheetInJson.Charsheet.health,
    healthChimerical: charSheetInJson.Charsheet.healthChimerical,
    arts: charSheetInJson.Charsheet.arts,
    realms: charSheetInJson.Charsheet.realms,
  };
}
