import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useTranslation } from 'react-i18next';

import { useProfile } from '../../services/storageAdapter';
import { CharSheetBody } from './CharSheetBody';
import './CharSheetPage.css';
import { GameUtilsPanel } from './GameUtilsPanel';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { profile } = useProfile();

  const [ title, setTitle ] = useState<string>('');

  const { t } = useTranslation();

  useEffect(() => {
    const characterName = profile.name.trim() === ''
      ? t('header.emptyName')
      : profile.name;
    setTitle(t('header.charsheetWithName', {
      characterName
    }));
  }, [t, profile]);

  return (
    <DocumentTitle title={title}>
      <div className="CharSheetPage tw-flex">
        <CharSheetBody />
        <GameUtilsPanel />
      </div>
    </DocumentTitle>
  );
}



