import React from 'react';
import './ActionList.css';
import classnames from "classnames";
import { UploadDatabaseButton } from '../Header/UploadDatabaseButton';
import { DownloadDatabaseButton } from '../Header/DownloadDatabaseButton';
import { CreateDatabaseButton } from '../Header/CreateDatabaseButton';
import { LangButton } from '../Header/LangButton';

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
    </div>
  );
}



