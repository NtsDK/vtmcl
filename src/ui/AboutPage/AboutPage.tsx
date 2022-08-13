import React from 'react';
import DocumentTitle from 'react-document-title';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

import './AboutPage.css';


interface AboutPageProps {
}

export function AboutPage(props: AboutPageProps) {
  const { t } = useTranslation();

  return (
    <DocumentTitle title={t('header.about')}>
      <div className="AboutPage">
        <Card>
          <Card.Body>
            <div>
              <div className="tw-mb-8">
                <p>Лист персонажа VtM V20 от NtsDK</p>
                <p>Версия 0.2.0 от 23.06.2022</p>
                <p>Проект с открытым исходным кодом под лицензией Apache 2.0</p>
                <p>В проекте используются иконки с сайта <a href="www.flaticon.com">www.flaticon.com</a> от авторов Freepik, Picol, Nice and Serious.</p>
                <p>В проекте используются флаги с сайта <a href="flagicons.lipis.dev">flagicons.lipis.dev</a></p>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">Ссылки</h2>
                <ul>
                  <li>
                    <a href="http://trechkalov.com">Сайт разработчика: trechkalov.com</a>
                  </li>
                  <li>
                    <a href="https://vk.com/ntsdk_wod_software">Группа проекта вконтакте</a>
                  </li>
                  <li>
                    <a href="https://t.me/ntsdk_wod_software">Канал проекта в телеграмме</a>
                  </li>
                  <li>
                    <a href="https://t.me/ntsdk_wod_software_chat">Чат проекта в телеграмме</a>
                  </li>
                  <li>
                    <a href="https://github.com/NtsDK/vtmcl">Исходный код проекта</a>
                  </li>
                </ul>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">История версий</h2>
                <ul>
                  <li>
                    Версия 0.2.2 (1 Jul 2022) - Добавлен чеклист создания персонажа. Небольшие изменения интерфейса и исправление багов.
                  </li>
                  <li>
                    Версия 0.2.1 (24 Jun 2022) - проект переписан с нуля с сохранением обратной совместимости, поддержкой русского и английского языка и оригинального дизайна.
                  </li>
                  <li>
                    Версия 0.1.0 (7 Nov 2017) - проект 'Лист персонажа Vampire: the Masquerade' интегрирован в проект НИМС. Реализован базовый лист персонажа для VtM 4ой редакции с поддержкой русского и английского языков.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="tw-text-lg">Участники проекта</h2>
              <ul>
                <li>
                  Тимофей NtsDK Речкалов - разработка
                </li>
                <li>
                  Павел Синеглазов - дизайн
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </DocumentTitle>
  );
}



