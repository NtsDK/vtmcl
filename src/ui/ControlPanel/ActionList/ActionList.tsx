import React from "react";
import classnames from "classnames";

import {
  useCharSheetStorage,
  useErrorDescription,
} from "../../../charSheets/root/services/storageAdapter";

import { UploadDatabaseButton } from "./UploadDatabaseButton";
import { DownloadDatabaseButton } from "./DownloadDatabaseButton";
import { CreateDatabaseButton } from "./CreateDatabaseButton";
import { LangButton } from "./LangButton";
import { FullscreenButton } from "./FullscreenButton";

interface ActionListProps {
  className?: string;
}

export function ActionList(props: ActionListProps): JSX.Element {
  const { className } = props;

  const errorDescriptionService = useErrorDescription();
  const charSheetStorageService = useCharSheetStorage();

  return (
    <div className={classnames("ActionList", className)}>
      <UploadDatabaseButton
        {...errorDescriptionService}
        {...charSheetStorageService}
      />
      <DownloadDatabaseButton {...charSheetStorageService} />
      <CreateDatabaseButton {...charSheetStorageService} />
      {window.GLOBAL_DEFAULT_LANG === "ru" && (
        <>
          <LangButton lang="ru" />
          <LangButton lang="en" />
        </>
      )}
      <FullscreenButton />
    </div>
  );
}
