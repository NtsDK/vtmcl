import { profile } from "./charsheet_profile";
import { attributes } from "./charsheet_attributes";
import { abilities } from "./charsheet_abilities";
import { advantages } from "./charsheet_advantages";
import { status } from "./charsheet_status";
import { checklist } from "./checklist";
import { actionMenu } from "./actionMenu";
import { about } from "./about";




export const ruTranslation = {
  about,
  checklist,
  actionMenu,
  "buttons": {
    'hide-panel': 'Спрятать панель',
    'show-panel': 'Показать панель',
  },
  'errors': {
    'error-on-file-loading': 'Ошибка при загрузке листа персонажа',
    'check-developer-console': 'См. консоль разработчика'
  },
  "visual-settings": {
    'header': 'Настройки внешнего вида',
    'background-color': 'Цвет фона',
    'charsheet-background-mode': 'Фон листа персонажа',
    'charsheet-background-color': 'Цвет фона листа персонажа',
    'charsheet-background-image': 'Изображение фона листа персонажа',
    'to-default-background-image': 'Изображение по умолчанию',

    'charsheet-image': 'Изображение',
    'charsheet-none': 'Нет фона',
    'charsheet-color': 'Цвет',
  },
  "charsheet": {
    'emptyName': 'Безымянный персонаж',
    'charsheet': 'Лист персонажа',
    preset: {
      vampire_v20: 'Вампиры: Маскарад. V20',
      changeling_v20: 'Подменыши: Грёза. V20',
    },
    profile,
    attributes,
    abilities,
    advantages,
    status,
    'notes': 'Заметки',
  },
  "common": {
    "to": "в",
    "ok": "ОК",
    "cancel": "Отмена",
    "confirm": "Подтвердить",
    "add": "Добавить",
    "create": "Создать",
    "rename": "Переименовать",
    "remove": "Удалить",
    "replace": "Заменить",
    "on": "на",
    "set-item-before": "Перед '{0}'",
    "set-item-as-last": "В конец",
  },
  // "overview": {
  //   'consistency-problem-detected': "Проверка данных выявила нарушение целостности базы, пожалуйста свяжитесь с разработчиками для устранения проблемы.",
  //   'consistency-is-ok': 'Повреждений базы не выявлено.',
  // },
  // "instruction-tab": {
  //   'actions-n-possibilities': 'Действия и возможности',
  //   'video': 'Видео',
  // },
  // "utils": {
  //   "close-page-warning": "Убедитесь, что сохранили данные. После закрытия страницы все несохраненные изменения будут потеряны.",
  //   "new-base-warning": "Вы уверены, что хотите создать новую базу? Все несохраненные изменения будут потеряны.",
  //   "base-file-loading-error": "Ошибка при загрузке файла"
  // },
  // "log-viewer": {
  //   "page": "Страница",
  //   "date": "Дата",
  //   "user": "Пользователь",
  //   "action": "Действие",
  //   "params": "Параметры",
  // },
  // 'about': {
  //   "about-authors": "Программа 'Лист персонажа Vampire: the Masquerade' разработана Тимофеем Речкаловым (NtsDK) по просьбе Павла Синеглазова. Дизайн: Павел Синеглазов. Реализация: Тимофей Речкалов.",
  //   "site-mention": "Сайт автора: ",
  //   "site-description": "На сайте вы можете ознакомиться с другими программами автора.",
  //   "program-is-free-in-rep": "Исходный код доступен под лицензией Apache 2",
  //   "by-link": "в репозитории",
  //   "icons-authors": "Авторы используемых иконок с сайта www.flaticon.com: Freepik, Picol, Nice and Serious. Флаги взяты с flag-icon-css.lip.is.",
  //   "versions": "История версий",
  //   "var010": "Версия 0.1.0 (7 Nov 2017) - проект 'Лист персонажа Vampire: the Masquerade' интегрирован в проект НИМС. Реализован базовый лист персонажа для VtM 4ой редакции с поддержкой русского и английского языков.",
  // },
};

