import { ruTranslation } from "../ruTranslation";
import { profile } from "./charsheet_profile";
import { attributes } from "./charsheet_attributes";
import { abilities } from "./charsheet_abilities";
import { advantages } from "./charsheet_advantages";
import { status } from "./charsheet_status";
import { generation } from "./charsheet_generation";
import { checklist } from "./checklist";
import { actionMenu } from "./actionMenu";
import { about } from "./about";

type TranslationInfo = typeof ruTranslation;

export const enTranslation: TranslationInfo = {
  about,
  checklist,
  actionMenu,
  "buttons": {
    'hide-panel': 'Hide panel'
  },
  'errors': {
    'error-on-file-loading': 'Error on file loading',
    'check-developer-console': 'Check developer console'
  },
  "visual-settings": {
    'header': 'Visual Settings',
    'background-color': 'Background color',
    'charsheet-background-mode': 'Character sheet background',
    'charsheet-background-color': 'Character sheet background color',
    'charsheet-background-image': 'Character sheet background image',
    'to-default-background-image': 'Image by default',

    'charsheet-image': 'Image',
    'charsheet-none': 'No background',
    'charsheet-color': 'Color',
  },
  "charsheet": {
    'defaultPageTitle': 'Character Sheet VtM V20 by NtsDK',
    'charsheetWithName': '{{characterName}}. Character Sheet VtM V20',
    'emptyName': 'Nameless character',
    'charsheet': 'Character Sheet',
    profile,
    attributes,
    abilities,
    advantages,
    status,
    generation,
    'notes': 'Notes',
  },
  "common": {
    "to": "to",
    "ok": "OK",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "add": "Add",
    "create": "Create",
    "rename": "Rename",
    "remove": "Remove",
    "replace": "Replace",
    "on": "on",
    "set-item-before": "Before '{0}'",
    "set-item-as-last": "To end",
  },
  // "overview": {
  //   'consistency-problem-detected': "Detected base corruption during consistency check. Please contact developer to fix problems.",
  //   'consistency-is-ok': 'Base consistency is ok.',
  // },
  // "instruction-tab": {
  //   'actions-n-possibilities': 'Actions and possibilities',
  //   'video': 'Video',
  // },
  // "utils": {
  //   "close-page-warning": "Be sure you save your data. After page closing all unsaved data will be lost.",
  //   "new-base-warning": "Are you sure about creating new database? All unsaved changes in current database will be lost.",
  //   "base-file-loading-error": "Base file loading error."
  // },
  // "log-viewer": {
  //   "page": "Page",
  //   "date": "Date",
  //   "user": "User",
  //   "action": "Action",
  //   "params": "Parameters",
  // },
  // 'about': {
  //   "about-authors": "Program 'Character sheet Vampire: the Masquerade' is written by Timofey Rechkalov (NtsDK) by Pavel Sineglazov request. Design: Pavel Sineglazov. Coding: Timofey Rechkalov.",
  //   "site-mention": "Author\'s site: ",
  //   "site-description": "You can find other programs on author's site.",
  //   "program-is-free-in-rep": "Source code is open under Apache 2 license",
  //   "by-link": "in repository",
  //   "icons-authors": "Authors of used icons from www.flaticon.com: Freepik, Picol, Nice and Serious. Flags used from flag-icon-css.lip.is.",
  //   "versions": "Version story",
  //   "var010": "Version 0.1.0 (7 Nov 2017) - project 'Character sheet Vampire: the Masquerade' merged in NIMS project. Implemented basic character sheet for VtM 4th edition with English and Russian support.",
  // },
};
