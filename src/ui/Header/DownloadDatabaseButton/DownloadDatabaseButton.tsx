import React, { Component } from 'react';
import './DownloadDatabaseButton.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { json2File, makeFileName } from '../../../lib/fileUtils';
import { charSheetToJson } from '../../../infrastructure/dbLoader';
import { useCharSheetStorage } from '../../../services/storageAdapter';

interface DownloadDatabaseButtonProps {
};

export function DownloadDatabaseButton(props: DownloadDatabaseButtonProps) {
  const { t } = useTranslation();
  const { getCharSheet } = useCharSheetStorage();

  function downloadDatabaseAsFile() {
    const charSheet = getCharSheet();
    json2File(charSheetToJson(charSheet), makeFileName('vtm_charsheet_' + charSheet.profile.name, 'json', new Date()));
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      data-original-title=""
      onClick={() => downloadDatabaseAsFile()}
      title={t('header.save-database')}
      className="tw-py-3 tw-text-lg"
    >
      {t('header.save-database')}
    </Dropdown.Item>
  );
}


