import React, { ChangeEventHandler, ChangeEvent, memo } from "react";
import Button from "react-bootstrap/cjs/Button";
import { useTranslation } from "react-i18next";
import { AppearanceService } from "../../application/ports";

interface CharacterImageSectionProps extends AppearanceService {}

// @ts-ignore
function uploadDatabaseFile(evt) {
  const input = evt.target.querySelector("input");
  if (input) {
    input.value = "";
    input.click();
  }
}

export const CharacterImageSection = memo(function CharacterImageSection(
  props: CharacterImageSectionProps,
) {
  const { characterImage, setCharacterImage } = props;
  const { t } = useTranslation();

  function readImage(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const imageData = readerEvent.target?.result;
      if (typeof imageData === "string") {
        setCharacterImage(imageData);
      }
    };
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="CharacterImageSection">
      {characterImage !== "" && (
        <img
          className="tw-max-h-64 tw-mx-auto tw-px-8 tw-mb-4"
          src={characterImage}
          alt={t("charsheet.characterImage")}
        />
      )}
      <Button
        className="tw-bg-transparent hover:tw-bg-transparent
          tw-outline-1 tw-outline tw-outline-slate-700
          tw-border-transparent tw-text-slate-700
          hover:tw-text-slate-700
          "
        id="uploadCharacterImageButton"
        onClick={uploadDatabaseFile}
      >
        <input
          type="file"
          className="tw-hidden"
          tabIndex={-1}
          aria-labelledby="uploadCharacterImageButton"
          onChange={readImage}
        />
        {t("charsheet.uploadCharacterImage")}
      </Button>
    </div>
  );
});
