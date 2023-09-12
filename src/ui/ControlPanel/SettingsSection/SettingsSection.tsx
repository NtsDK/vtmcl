import React, { ChangeEvent } from "react";
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";
import { useTranslation } from "react-i18next";

import { initialSettings } from "../../../charSheets/misc/services/initialValues";
import { useSettings } from "../../../charSheets/misc/services/storageAdapter";

interface SettingsSectionProps {}

export function SettingsSection(props: SettingsSectionProps): JSX.Element {
  const { t } = useTranslation();
  const {
    settings,
    setBackgroundColor,
    setCharsheetBackMode,
    setCharsheetBackColor,
    setCharsheetBackImage,
  } = useSettings();

  function readImage(event: ChangeEvent<HTMLInputElement>): void {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const imageData = readerEvent.target?.result;
      if (typeof imageData === "string") {
        setCharsheetBackImage(imageData);
      }
    };
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="SettingsSection">
      <div className="tw-m-4">
        <label className="tw-mr-4">
          <span className="tw-mr-4">
            {t("visual-settings.background-color")}
          </span>
          <input
            type="color"
            className="background-color-input"
            value={settings.backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
      </div>
      <div className="tw-m-4">
        <h3 className="tw-text-lg tw-mb-4">
          {t("visual-settings.charsheet-background-mode")}
        </h3>
        <Form.Check
          type="radio"
          id="charsheet-none"
          name="charsheet-back-mode"
          className="tw-mb-4"
          label={t("visual-settings.charsheet-none")}
          checked={settings.charsheetBackMode === "charsheet-none"}
          onChange={(e) => setCharsheetBackMode("charsheet-none")}
        />
        <Form.Check
          type="radio"
          id="charsheet-color"
          name="charsheet-back-mode"
          className="tw-mb-2"
          label={t("visual-settings.charsheet-color")}
          checked={settings.charsheetBackMode === "charsheet-color"}
          onChange={(e) => setCharsheetBackMode("charsheet-color")}
        />
        <fieldset className="tw-border-2 tw-border-solid tw-border-gray-600 tw-px-6 tw-py-4 tw-mb-4">
          <label className="tw-mr-4">
            <span className="tw-mr-4">
              {t("visual-settings.charsheet-background-color")}
            </span>
            <input
              type="color"
              className="charsheet-background-color-input"
              value={settings.charsheetBackColor}
              onChange={(e) => setCharsheetBackColor(e.target.value)}
              disabled={settings.charsheetBackMode !== "charsheet-color"}
            />
          </label>
        </fieldset>
        <Form.Check
          type="radio"
          id="charsheet-image"
          name="charsheet-back-mode"
          className="tw-mb-2"
          label={t("visual-settings.charsheet-image")}
          checked={settings.charsheetBackMode === "charsheet-image"}
          onChange={(e) => setCharsheetBackMode("charsheet-image")}
        />
        <fieldset className="tw-border-2 tw-border-solid tw-border-gray-600 tw-px-6 tw-py-4">
          <div className="tw-mb-8">
            <label>
              <span className="tw-mr-4">
                {t("visual-settings.charsheet-background-image")}
              </span>
              <input
                type="file"
                className="charsheet-background-image-input"
                onChange={readImage}
                disabled={settings.charsheetBackMode !== "charsheet-image"}
              />
            </label>
          </div>
          <div>
            <Button
              className="back-image-to-default custom-btn-bg-color"
              onClick={() =>
                setCharsheetBackImage(initialSettings.charsheetBackImage_v2)
              }
              disabled={settings.charsheetBackMode !== "charsheet-image"}
            >
              {t("visual-settings.to-default-background-image")}
            </Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
