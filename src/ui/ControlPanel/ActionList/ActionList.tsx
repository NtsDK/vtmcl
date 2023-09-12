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
        className="ActionListItem"
        {...errorDescriptionService}
        {...charSheetStorageService}
      />
      <DownloadDatabaseButton
        className="ActionListItem"
        {...charSheetStorageService}
      />
      <CreateDatabaseButton
        className="ActionListItem"
        {...charSheetStorageService}
      />
      {globalThis.GLOBAL_DEFAULT_LANG === "ru" && (
        <>
          <LangButton className="ActionListItem" lang="ru" />
          <LangButton className="ActionListItem" lang="en" />
        </>
      )}
      <FullscreenButton className="ActionListItem" />
    </div>
  );
}
