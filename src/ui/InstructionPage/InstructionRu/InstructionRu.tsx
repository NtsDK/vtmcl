import React from "react";

import { ExternalLink } from "../../../uiLib/ExternalLink";
import { UnorderedList } from "../../../uiLib/UnorderedList";

interface InstructionRuProps {}

export function InstructionRu(props: InstructionRuProps): JSX.Element {
  return (
    <div className="InstructionRu">
      <div className="tw-mb-8">
        <h1 className="tw-text-lg tw-mb-4">
          Демонстрация работы с листом персонажа
        </h1>

        <iframe
          className="tw-mx-auto tw-mb-8"
          src="https://vk.com/video_ext.php?oid=3305695&id=456239345&hash=33fbd8c2e64848ce&hd=2"
          width="640"
          height="360"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameBorder="0"
          allowFullScreen
          title="VK video player"
        ></iframe>

        <div className="tw-mb-4">Зеркало на youtube</div>
        <iframe
          className="tw-mx-auto"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/1VADY2S84yk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tw-mb-8">
        <h2 className="tw-text-lg tw-mb-4">Что это за веб-страница?</h2>
        <p>
          Веб-страница 'Лист персонажа WoD v20 от NtsDK' это электронный лист
          персонажа для настольных ролевых игр во вселенной Мир Тьмы (World of
          Darkness) в версии 20th Anniversary Edition. Некоторые книги правил
          официально переведены на русский язык с подзаголовком 'Классические
          правила'. Например, 'Вампиры: Маскарад. Классические правила'.
        </p>
        <p>
          Вселенная Мира Тьмы представляет собой версию современного мира, в
          которой действуют мифические существа: вампиры, оборотни, маги,
          подменыши и др. У каждого вида существ своё видение истории мира,
          устройства общества и свой конфликт существования.
        </p>
        <p>
          В текущей версии реализованы одностраничные листы персонажей для
          вампиров и подменышей.
        </p>
        <p>
          Больше информации можно найти в интернете. Ссылки
          <UnorderedList>
            <li>
              <ExternalLink href="https://ru.wikipedia.org/wiki/Мир_Тьмы">
                Мир Тьмы
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://vk.com/@studio101-theme-mood">
                Готик-панк, тема и настроение игры «Вампиры: Маскарад»
              </ExternalLink>
            </li>
          </UnorderedList>
        </p>
      </div>
      <div>
        <h2 className="tw-text-lg tw-mb-4">
          Какие возможности даёт электронный лист персонажа?
        </h2>
        <UnorderedList>
          <li>
            Используя мою программу, вы можете создавать и изменять персонажей
            во вселенной Мир Тьмы. Информацию о персонаже можно скачать на свой
            компьютер, а потом загрузить её в лист персонажа на другом
            устройстве. Или хранить информацию о разных персонажах из разных
            хроник в отдельных файлах.
          </li>
          <li>
            Мой лист персонажа эстетичен и функционален. Он даёт больше
            возможностей, чем оригинальные интерактивные листы персонажа в PDF
            файлах. Списки доступных опций и чек-лист облегчают создание
            персонажей.
          </li>
          <li>Можно настроить внешний вид листа персонажа.</li>
          <li>Можно распечатать лист персонажа в PDF файл или на принтере.</li>
          <li>
            При переключении языка все возможное содержимое будет переведено.
            Поскольку о Мире Тьмы больше информации на английском языке, можно
            будет не ломать голову над обратным переводом с русского, а сразу
            узнать нужное название на языке оригинала.
          </li>
          <li>
            Лист персонажа адаптирован для использования со скринридерами.
          </li>
        </UnorderedList>
      </div>
    </div>
  );
}
