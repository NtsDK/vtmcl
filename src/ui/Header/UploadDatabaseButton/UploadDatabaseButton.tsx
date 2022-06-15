import React, { ChangeEventHandler } from 'react';
import './UploadDatabaseButton.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { readJsonFile } from '../../../lib/fileUtils';
import { useStore } from '../../../services/store';
import { 
  charSheetFromJson,
  // ServerDatabaseInJson, 
  // validateDatabaseSchema, 
  // serverDbFromJson 
  validateCharSheetInJson,
  
} from '../../../infrastructure/dbLoader';

// @ts-ignore
function uploadDatabaseFile(evt) {
  const input = evt.target.querySelector('input');
  if (input) {
    input.value = '';
    input.click();
  }
}

// @ts-ignore
export function UploadDatabaseButton(props) {
  const { onChange } = props;
  const { t } = useTranslation();

  const { setErrorDescription, setCharSheet } = useStore();

  function onUploadFileSelected(evt: ChangeEventHandler<HTMLInputElement>) {
    readJsonFile(evt).then((database2) => {
      // console.log('database2', database2);
      if (!validateCharSheetInJson(database2)) {
        try {
          // attempts to apply migrator
          // const db = (database2 as CharacterSheetInJson);
          // db.gameData = db.gameData.map(el => ({
          //   id: el.id,
          //   label: el.label,
          //   link: el.link,
          //   orgName: el.orgName,
          //   orgLogin: el.orgLogin,
          //   orgPassword: el.orgPassword,
          //   city: el.city,
          //   date: el.date,
          //   mark: Number(el.mark),
          //   notes: el.notes,
          //   serverId: el.serverId,
          //   duration: Number(el.duration)
          // }));
          // db.serverData = db.serverData.map(el => ({
          //   id: el.id,
          //   label: el.label,
          //   link: el.link,
          //   login: el.login,
          //   password: el.password,
          // }));
  
          // if (!validateCharSheetInJson(db)) {
          //   setErrorDescription({
          //     title: 'Ошибка при загрузке базы',
          //     text: 'См. консоль разработчика'
          //   });
          //   console.log('Ошибка при загрузке базы', database2, validateCharSheetInJson.errors);
          //   return;
          // }
          
          // setServerDatabase(serverDbFromJson(db));
          setErrorDescription({
            title: 'Ошибка при загрузке базы',
            text: 'См. консоль разработчика'
          });
          console.log('Ошибка при загрузке базы', database2, validateCharSheetInJson.errors);

        } catch (error) {
          setErrorDescription({
            title: 'Ошибка при загрузке базы',
            text: 'См. консоль разработчика'
          });
          console.log('Ошибка при загрузке базы', database2, error);
        }
      } else {
        setCharSheet(charSheetFromJson(database2));
      }
    }).catch(error => {
      setErrorDescription({
        title: 'Ошибка при загрузке базы',
        text: 'См. консоль разработчика'
      });
      console.log('Ошибка при загрузке базы', error);
    });
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      data-original-title=""
      title={t('header.open-database')}
      onClick={uploadDatabaseFile}
      className="tw-py-3 tw-text-lg"
    >
      <input
        type="file"
        className="tw-hidden"
        tabIndex={-1}
        // @ts-ignore
        onChange={onUploadFileSelected}
      />
      {t('header.open-database')}
    </Dropdown.Item>
  );
}
