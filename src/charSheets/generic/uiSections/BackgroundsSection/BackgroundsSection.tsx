import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { NameNumberSection } from "../../uiPrimitives/NameNumberSection";
import { LimitService } from "../../../../charSheets/root/application/ports";
import { BackgroundsService } from "../../application/ports";
import { Options } from "../../../root/domain";

interface BackgroundsSectionProps extends BackgroundsService, LimitService {
  backgroundOptions?: Options;
  className?: string;
}

export const BackgroundsSection = memo(function BackgroundsSection(
  props: BackgroundsSectionProps
) {
  const { t } = useTranslation();
  const {
    backgrounds,
    addBackground,
    setBackgroundName,
    setBackgroundValue,
    removeBackground,
    className,
    backgroundOptions,
    limits,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="background"
      className={classnames("BackgroundsSection", className)}
      addItem={addBackground}
      items={backgrounds}
      removeItem={removeBackground}
      setItemName={setBackgroundName}
      setItemValue={setBackgroundValue}
      addItemMsg={t("charsheet.advantages.add-background")}
      removeItemMsg={t("charsheet.advantages.remove-background")}
      options={backgroundOptions}
      selectOptionMsg={t("charsheet.advantages.select-background")}
      nameLabel="charsheet.advantages.background-label"
      max={limits.parameterLimit}
    />
  );
});
