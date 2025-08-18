import React, { Component } from "react";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { json2File, makeFileName } from "../../../../lib/fileUtils";
import { charSheetToJson } from "../../../../charSheets/root/infrastructure/dbLoader";
import { CharSheetStorageService } from "../../../../charSheets/root/application/ports";

interface DownloadDatabaseButtonProps extends CharSheetStorageService {
  className?: string;
}

export function DownloadDatabaseButton(
  props: DownloadDatabaseButtonProps,
): JSX.Element {
  const { t } = useTranslation();
  const { charSheet, className } = props;

  function downloadDatabaseAsFile(): void {
    json2File(
      charSheetToJson(charSheet),
      makeFileName(
        charSheet.preset + "_" + charSheet.profile.name,
        "json",
        new Date(),
      ),
    );
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      data-original-title=""
      onClick={() => downloadDatabaseAsFile()}
      className={classnames("DownloadDatabaseButton", className)}
    >
      {t("actionMenu.save-database")}
    </Dropdown.Item>
  );
}
