import React, { ChangeEventHandler, ChangeEvent } from "react";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { readTextFile } from "../../../../lib/fileUtils";
import { strToCharSheet } from "../../../../charSheets/root/infrastructure/dbLoader";
import {
  CharSheetStorageService,
  ErrorDescriptionService,
} from "../../../../charSheets/root/application/ports";

// @ts-ignore
function uploadDatabaseFile(evt): void {
  const input = evt.target.querySelector("input");
  if (input) {
    input.value = "";
    input.click();
  }
}

interface UploadDatabaseButtonProps
  extends ErrorDescriptionService,
    CharSheetStorageService {
  className?: string;
}

export function UploadDatabaseButton(
  props: UploadDatabaseButtonProps,
): JSX.Element {
  const { t } = useTranslation();

  const { setErrorDescription, setCharSheet, className } = props;

  function onUploadFileSelected(evt: ChangeEvent<HTMLInputElement>): void {
    readTextFile(evt)
      .then((databaseStr) => {
        try {
          if (typeof databaseStr !== "string") {
            return;
          }

          setCharSheet(strToCharSheet(databaseStr));
        } catch (error) {
          setErrorDescription({
            title: t("errors.error-on-file-loading"),
            text: t("errors.check-developer-console"),
          });
          console.error(t("errors.error-on-file-loading"), databaseStr, error);
        }
      })
      .catch((error) => {
        setErrorDescription({
          title: t("errors.error-on-file-loading"),
          text: t("errors.check-developer-console"),
        });
        console.error(t("errors.error-on-file-loading"), error);
      });
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      onClick={uploadDatabaseFile}
      className={classnames("UploadDatabaseButton tw-bg-gray-100", className)}
      id="uploadDatabaseButton"
    >
      <input
        type="file"
        className="tw-hidden"
        tabIndex={-1}
        aria-labelledby="uploadDatabaseButton"
        onChange={onUploadFileSelected}
      />
      {t("actionMenu.open-database")}
    </Dropdown.Item>
  );
}
