import React from 'react';
import classnames from "classnames";

import './ActionList.css';

import { UploadDatabaseButton } from './UploadDatabaseButton';
import { DownloadDatabaseButton } from './DownloadDatabaseButton';
import { CreateDatabaseButton } from './CreateDatabaseButton';
import { LangButton } from './LangButton';
import { FullscreenButton } from './FullscreenButton';

interface ActionListProps {
  className?: string;
}

export function ActionList(props: ActionListProps) {
  const { className } = props;

  return (
    <div className={classnames("ActionList", className)}>
      <UploadDatabaseButton />
      <DownloadDatabaseButton />
      <CreateDatabaseButton />
      <LangButton lang='ru'/>
      <LangButton lang='en'/>
      <FullscreenButton/>
    </div>
  );
}



