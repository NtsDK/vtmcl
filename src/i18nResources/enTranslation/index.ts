import { ruTranslation } from "../ruTranslation";
import { header } from "./header";
import { profile } from "./profile";
import { attributes } from "./attributes";
import { abilities } from "./abilities";

type TranslationInfo = typeof ruTranslation;

export const enTranslation: TranslationInfo = {
  "checklist": {
    'fix': 'Fix',
    // rules
    'attribute-dots': 'Dots by attributes {{expected}} (fact\xa0{{value}})',
    'ability-dots': 'Dots by abilities {{expected}} (fact\xa0{{value}})',
    'ability-dot-limit': 'Not more {{expected}} dots per ability',
    'discipline-dots': '{{expected}} discipline dots (fact\xa0{{value}})',
    'background-dots': '{{expected}} background dots (fact\xa0{{value}})',
    'virtue-dots': '{{expected}} virtue dots (fact\xa0{{value}})',
    'humanity-dots': 'Humanity = Conscience + Self Control (fact\xa0{{value}}\xa0=\xa0{{expected}})',
    'willpower-dots': 'Will power = Courage (fact\xa0{{value}}\xa0=\xa0{{expected}})',
    'bloodpool-dots': 'Blood pool = roll d10 (fact\xa0{{value}})',
    // free points
    'free-point-description': 'Freebie Points: 15. Optionally add merits and flaws (max 7 points)',
    'free-point-cost': 'Trait Cost',
    'attribute': 'Attribute',
    'ability': 'Ability',
    'discipline': 'Discipline',
    'background': 'Background',
    'virtue': 'Virtue',
    'humanity-path': 'Humanity/Path',
    'willpower': 'Willpower',
  },
  "buttons": {
    'add-merit': 'Add merit',
    'remove-merit': 'Remove merit',
    'add-flaw': 'Add flaw',
    'remove-flaw': 'Remove flaw',
    'add-discipline': 'Add discipline',
    'remove-discipline': 'Remove discipline',
    'add-background': 'Add background',
    'remove-background': 'Remove background',
    'hide-panel': 'Hide panel'
  },
  'errors': {
    'error-on-file-loading': 'Error on file loading',
    'check-developer-console': 'Check developer console'
  },
  "instruction-tab": {
    'actions-n-possibilities': 'Actions and possibilities',
    'video': 'Video',
  },
  "charsheet-tab": {
    'settings': 'Settings',
    'background-color': 'Background color',
    'charsheet-background-mode': 'Character sheet background',
    'charsheet-background-color': 'Character sheet background color',
    'charsheet-background-image': 'Character sheet background image',
    'to-default-background-image': 'Image by default',
  },
  "charsheet": {
    profile,
    attributes,
    abilities,

    'advantages': 'Advantages',
    'disciplines': 'Disciplines',
    'backgrounds': 'Backgrounds',
    'traits': 'Traits',
    'virtues': 'Virtues',
    'conscience': 'Conscience / Conviction',
    'self_control': 'Self control / Instinct',
    'courage': 'Courage',

    'other': 'Other',
    'merits': 'Merits',
    'flaws': 'Flaws',
    'state': 'State',
    'humanity': 'Humanity/Path',
    'willpower': 'Willpower',
    'bloodpool': 'Bloodpool',
    'health': 'Health',
    'weakness': 'Weakness',
    'experience': 'Experience',

    // // disciplines
    // 'animalism': 'Animalism',
    // 'bardo': 'Bardo',
    // 'valeren': 'Valeren',
    // 'visceratika': 'Visceratika',
    // 'obtenebration': 'Obtenebration',
    // 'daimoinon': 'Daimoinon',
    // 'dominate': 'Dominate',
    // 'obfuscate': 'Obfuscate',
    // 'vicissitude': 'Vicissitude',
    // 'kineticism': 'Kineticism',
    // 'melpominee': 'Melpominee',
    // 'mytherceria': 'Mytherceria',
    // 'potence': 'Potence',
    // 'nihilistics': 'Nihilistics',
    // 'obeah': 'Obeah',
    // 'gargoyle flight': 'Gargoyle Flight',
    // 'dementation': 'Dementation',
    // 'protean': 'Protean',
    // 'presence': 'Presence',
    // 'auspex': 'Auspex',
    // 'sanguinus': 'Sanguinus',
    // 'serpentis': 'Serpentis',
    // 'quietus': 'Quietus',
    // 'mortis': 'Mortis',
    // 'fortitude': 'Fortitude',
    // 'celerity': 'Celerity',
    // 'thanatosis': 'Thanatosis',
    // 'temporis': 'Temporis',
    // 'chimerstry': 'Chimerstry',
    // 'spiritus': 'Spiritus',

    // health
    'bruised': 'Bruised',
    'hurt': 'Hurt',
    'injured': 'Injured',
    'wounded': 'Wounded',
    'mauled': 'Mauled',
    'crippled': 'Crippled',
    'incapacitated': 'Incapacitated',

    'notes': 'Notes',
  },
  header,
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
  "constant": {
    "yes": "Yes",
    "no": "No",
    // social network subsets
    "allObjects": "All objects",
    "selectedCharacters": "Selected characters",
    "selectedStories": "Selected stories",
    // social network types
    //"simpleNetwork"            : "Simple Network",
    "socialRelations": "Social Realtions",
    "characterPresenceInStory": "Character-Presence-Story",
    "characterActivityInStory": "Character-Activity-Story",
    // no group
    "noGroup": "No group",
    "fromGroup": "Group member",
    // activities
    "active": "Active",
    "follower": "Follower",
    "defensive": "Defensive",
    "passive": "Passive",
    "active-s": "A",
    "follower-s": "F",
    "defensive-s": "D",
    "passive-s": "P",
    // number filter
    "ignore": "Ignore",
    "greater": "Greater",
    "equal": "Equal",
    "lesser": "Lesser",
    // multi enum filter
    "every": "Every",
    "some": "Some",
    // adaptations labels
    "finishedText": "Text finished",
    "finishedSuffix": "(finished)",
    "emptySuffix": "(empty)",
    // profile item types
    "text": "Text",
    "string": "String",
    "enum": "Single Choice", // single choice
    "number": "Number",
    "checkbox": "Checkbox",
    "multiEnum": "Multi Choice",
    // player access types
    "write": "Write",
    "readonly": "Read only",
    "hidden": "Hidden",
    // symbol count
    'masterStories': 'Master stories',
    'eventOrigins': 'Event origins',
    'eventAdaptations': 'Event adaptations',
    'groups': 'Groups',
    'relations': 'Relations',
    // binding count
    'freeCharacters': 'Free characters',
    'freePlayers': 'Free players',
    'bindingNum': 'Binded characters/players',
    // misc
    'notAvailable': 'N/A',
    'charsheet-image': 'Image',
    'charsheet-none': 'No background',
    'charsheet-color': 'Color',
  },
  "overview": {
    'consistency-problem-detected': "Detected base corruption during consistency check. Please contact developer to fix problems.",
    'consistency-is-ok': 'Base consistency is ok.',
  },
  "utils": {
    "close-page-warning": "Be sure you save your data. After page closing all unsaved data will be lost.",
    "new-base-warning": "Are you sure about creating new database? All unsaved changes in current database will be lost.",
    "base-file-loading-error": "Base file loading error."
  },
  // "log-viewer": {
  //   "page": "Page",
  //   "date": "Date",
  //   "user": "User",
  //   "action": "Action",
  //   "params": "Parameters",
  // },
  'about': {
    "about-authors": "Program 'Character sheet Vampire: the Masquerade' is written by Timofey Rechkalov (NtsDK) by Pavel Sineglazov request. Design: Pavel Sineglazov. Coding: Timofey Rechkalov.",
    "site-mention": "Author\'s site: ",
    "site-description": "You can find other programs on author's site.",
    "program-is-free-in-rep": "Source code is open under Apache 2 license",
    "by-link": "in repository",
    "icons-authors": "Authors of used icons from www.flaticon.com: Freepik, Picol, Nice and Serious. Flags used from flag-icon-css.lip.is.",
    "versions": "Version story",
    "var010": "Version 0.1.0 (7 Nov 2017) - project 'Character sheet Vampire: the Masquerade' merged in NIMS project. Implemented basic character sheet for VtM 4th edition with English and Russian support.",
  },
  //    'entrance': {
  //        'register-success'              :'Registration finished. Use login form to enter.'     ,
  //        'enter-user-name-and-password'  :'Enter user name and password'                        ,
  //        'login'                         :'Login'                                               ,
  //        'password'                      :'Password'                                            ,
  //        'enter'                         :'Enter'                                               ,
  //        'user-name'                     :'User name'                                           ,
  //        'confirmation'                  :'Confirmation'                                        ,
  //        'confirm-password'              :'Confirm password'                                    ,
  //        'register'                      :'Register'                                            ,
  //        
  //        'disclaimer'                    :'In case of problem or difficulties please contact maintainers.' ,  
  //        'developer-site'                :'Maintainer site.'                                                                        ,
  //        
  //    },
  // 'errors': {
  //   'unexpected-user-type': 'Wrong user type "{0}"',
  //   'password-is-incorrect': 'Password is incorrect',
  //   'user-is-not-found': 'User is not found',
  //   'password-is-not-specified': "Password is not specified",
  //   'passwords-not-match': 'Passwords not match',
  //   'register-operation-is-forbidden': 'Registration is forbidden',
  //   'unexpected-switch-argument': 'Error: unprocessed argument - {0}. Please contact maintainers.',

  //   'unsupported-types-in-list': 'Unsupported types: "{0}"',
  //   'unsupported-type-in-list': 'Unsupported type: "{0}"',
  //   'entity-is-not-exist': 'Entity "{0}" is not exist',
  //   'entities-are-not-exist': 'Entities "{0}" are not exist',
  //   'argument-is-not-a-string': 'Argument "{0}" is not a string',

  //   'argument-is-not-a-number': 'Argument "{0}" is not a number',
  //   'argument-is-not-an-array': 'Argument "{0}" is not an array',
  //   'argument-is-not-an-object': 'Argument "{0}" is not an object',
  //   'argument-is-not-a-boolean': 'Argument "{0}" is not a boolean',
  //   'argument-is-not-nil': 'Argument "{0}" is not nil',
  //   'entity-is-used': 'Entity "{0}" already exists',

  //   'name-is-empty-string': 'Name can\'t be empty string',
  //   'argument-must-not-be-equal': 'Argument must not be equal "{0}"',
  //   'argument-is-not-in-range': 'Argument "{0}" is out of range ({1}, {2})',
  //   'argument-is-empty-string': 'Argument can\'t be empty string',
  //   'argument-is-not-empty-string': 'Argument must be empty string',
  //   'argument-is-negative': 'Argument "{0}" is not positive or zero',
  //   'arguments-must-be-equal': 'Arguments "{0}" and "{1}" must be equal',
  //   'argument-doesnt-match-pattern': 'Argument "{0}" doesnt match pattern "{1}"',
  //   //        'argument-is-negative-or-zero' : 'Argument "{0}" is not positive number',

  //   'forbidden': 'Command call is forbidden',
  //   'unknown-command': 'Unknown command "{0}"',
  //   'user-is-not-logged': 'User is not logged is',
  //   'forbidden-for-role': 'Command "{0}" is forbidden for role "{1}"',
  //   'forbidden-for-non-admin': 'Command "{0}" is for administrator role only',
  //   'forbidden-for-non-editor': 'Command "{0}" is for editor role only',
  //   'other-user-is-editor': 'User "{0}" is an editor. Base is closed for changes by other authors.',
  //   'master-is-not-an-owner': 'You are not an owner of entity "{0}"',
  //   'forbidden-to-create-char': 'Players can\'t create characters',
  //   'player-cant-write-to-other-player': 'Player can\'t modify other player',
  //   'character-is-not-binded-to-player': 'Character is not binded to player',
  //   'player-cant-write-profile-item': 'Player can\'t modify profile item',

  //   'player-is-not-a-shop-owner': 'Player "{0}" is not a shop owner "{1}"',

  //   'unsupported-operation': 'Unsupported operation.',
  //   'unexpected-buy-implant-error': 'By technical reasons your implant cant be delivered immediately. You are added to delivery queue. We apologise for any inconvenience this may have caused. For Official Use Only: {0}'
  // }
};