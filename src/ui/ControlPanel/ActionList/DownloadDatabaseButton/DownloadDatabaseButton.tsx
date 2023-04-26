import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

import { json2File, makeFileName } from "../../../../lib/fileUtils";
import { charSheetToJson } from "../../../../charSheets/root/infrastructure/dbLoader";
import { CharSheetStorageService } from "../../../../charSheets/root/application/ports";

interface DownloadDatabaseButtonProps extends CharSheetStorageService {}

export function DownloadDatabaseButton(
  props: DownloadDatabaseButtonProps
): JSX.Element {
  const { t } = useTranslation();
  const { charSheet } = props;

  function downloadDatabaseAsFile(): void {
    json2File(
      charSheetToJson(charSheet),
      makeFileName(
        "vtm_charsheet_" + charSheet.profile.name,
        "json",
        new Date()
      )
    );
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      data-original-title=""
      onClick={() => downloadDatabaseAsFile()}
      // title={t('header.save-database')}
      className="tw-py-3 tw-text-lg"
    >
      {t("actionMenu.save-database")}
    </Dropdown.Item>
  );
}
