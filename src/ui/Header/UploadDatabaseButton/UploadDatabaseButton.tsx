import React, { ChangeEventHandler } from 'react';
import './UploadDatabaseButton.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { readTextFile } from '../../../lib/fileUtils';
import { useStore } from '../../../services/store';
import { 
  strToCharSheet,
  
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
    readTextFile(evt).then((databaseStr) => {
      try {
        if(typeof databaseStr !== 'string') {
          return;
        }

        setCharSheet(strToCharSheet(databaseStr));
      } catch (error) {
        setErrorDescription({
          title: t('errors.error-on-file-loading'),
          text: t('errors.check-developer-console')
        });
        console.error(t('errors.error-on-file-loading'), databaseStr, error);
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
      // title={t('header.open-database')}
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
