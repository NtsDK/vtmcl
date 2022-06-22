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
import { 
  useCharSheetStorage, 
  useErrorDescription 
} from '../../../services/storageAdapter';
import { migrate } from '../../../domainServices';

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

  const { setErrorDescription } = useErrorDescription();
  const { setCharSheet } = useCharSheetStorage();

  function onUploadFileSelected(evt: ChangeEventHandler<HTMLInputElement>) {
    readJsonFile(evt).then((database2) => {
      // console.log('database2', database2);
      if (!validateCharSheetInJson(database2)) {
        try {
          const database3 = migrate(database2);
          if (!validateCharSheetInJson(database3)) {
            console.error(t('errors.error-on-file-loading'), database2, JSON.stringify(validateCharSheetInJson.errors, null, '  '));
            throw new Error('Ошибка в мигрированной версии листа персонажа ' + JSON.stringify(validateCharSheetInJson.errors, null, '  '));
          }

          setCharSheet(charSheetFromJson(database3));
        } catch (error) {
          setErrorDescription({
            title: t('errors.error-on-file-loading'),
            text: t('errors.check-developer-console')
          });
          console.error(t('errors.error-on-file-loading'), database2, error);
        }
      } else {
        setCharSheet(charSheetFromJson(database2));
      }
    }).catch(error => {
      setErrorDescription({
        title: t('errors.error-on-file-loading'),
        text: t('errors.check-developer-console')
      });
      console.error(t('errors.error-on-file-loading'), error);
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
