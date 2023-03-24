import React from 'react';
import classnames from "classnames";

import './ActionList.css';

import { UploadDatabaseButton } from './UploadDatabaseButton';
import { DownloadDatabaseButton } from './DownloadDatabaseButton';
import { CreateDatabaseButton } from './CreateDatabaseButton';
import { LangButton } from './LangButton';
import { FullscreenButton } from './FullscreenButton';
import {
  useCharSheetStorage,
  useErrorDescription
} from '../../../services/storageAdapter';

interface ActionListProps {
  className?: string;
}

export function ActionList(props: ActionListProps) {
  const { className } = props;

  const errorDescriptionService = useErrorDescription();
  const charSheetStorageService = useCharSheetStorage();

  return (
    <div className={classnames("ActionList", className)}>
      <UploadDatabaseButton
        {...errorDescriptionService}
        {...charSheetStorageService}
      />
      <DownloadDatabaseButton
        {...charSheetStorageService}
      />
      <CreateDatabaseButton
        {...charSheetStorageService}
      />
      <LangButton lang='ru'/>
      <LangButton lang='en'/>
      <FullscreenButton/>
    </div>
  );
}



