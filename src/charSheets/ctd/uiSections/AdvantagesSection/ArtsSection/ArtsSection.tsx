import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { Limits } from "../../../../root/domain";
import { NameNumberSection } from "../../../../generic/uiPrimitives";
import { ArtsService } from "../../../application/ports";

interface ArtsSectionProps extends ArtsService {
  artOptions: string[];
  limits: Limits;
  className?: string;
}

export const ArtsSection = memo(function ArtsSection(props: ArtsSectionProps) {
  const { t } = useTranslation();
  const {
    className,
    artOptions,
    limits,
    arts,
    addArt,
    removeArt,
    setArtName,
    setArtValue,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="art"
      className={classnames("ArtsSection", className)}
      addItem={addArt}
      items={arts}
      removeItem={removeArt}
      setItemName={setArtName}
      setItemValue={setArtValue}
      addItemMsg={t("charsheet.advantages.add-art")}
      removeItemMsg={t("charsheet.advantages.remove-art")}
      options={artOptions}
      selectOptionMsg={t("charsheet.advantages.select-art")}
      nameLabel="charsheet.advantages.art-label"
      max={limits.parameterLimit}
    />
  );
});
