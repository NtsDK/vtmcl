import { ruTranslation } from "../ruTranslation";
import { profile } from "./charsheet_profile";
import { attributes } from "./charsheet_attributes";
import { abilities } from "./charsheet_abilities";
import { advantages } from "./charsheet_advantages";
import { status } from "./charsheet_status";
import { checklist } from "./checklist";
import { actionMenu } from "./actionMenu";
import { about } from "./about";
import { instruction } from "./instruction";

type TranslationInfo = typeof ruTranslation;

export const enTranslation: TranslationInfo = {
  about,
  checklist,
  actionMenu,
  instruction,
  "buttons": {
    'hide-panel': 'Hide panel',
    'show-panel': 'Show panel'
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
    'emptyName': 'Nameless character',
    'charsheet': 'Character Sheet',
    'type-select': 'Character sheet type',
    preset: {
      vampire_v20: 'Vampire: The Masquerade. V20',
      changeling_v20: 'Changeling: The Dreaming. V20',
    },
    profile,
    attributes,
    abilities,
    advantages,
    status,
    'notes': 'Notes',
    'goals': 'Goals',
    'charHistory': 'History',
    'appearanceDescription': 'Appearance Description',
    'otherTraits': 'Other Traits',
    'alliesAndContacts': 'Allies and Contacts',
    'possessions': 'Possessions',
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
};
