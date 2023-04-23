import React, { memo } from "react";
import { NameNumberSection } from "../../uiPrimitives/NameNumberSection";

import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { Limits } from "../../../root/domain";
import { OtherTraitsService } from "../../application/ports";

interface OtherTraitsSectionProps extends OtherTraitsService {
  limits: Limits;
  className?: string;
}

export const OtherTraitsSection = memo(function OtherTraitsSection(
  props: OtherTraitsSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    limits,
    otherTraits,
    addOtherTrait,
    removeOtherTrait,
    setOtherTraitName,
    setOtherTraitValue,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="otherTrait"
      className={classnames("OtherTraitsSection", className)}
      addItem={addOtherTrait}
      items={otherTraits}
      removeItem={removeOtherTrait}
      setItemName={setOtherTraitName}
      setItemValue={setOtherTraitValue}
      addItemMsg={t("charsheet.advantages.add-otherTrait")}
      removeItemMsg={t("charsheet.advantages.remove-otherTrait")}
      selectOptionMsg={t("charsheet.advantages.select-otherTrait")}
      nameLabel="charsheet.advantages.otherTrait-label"
      max={limits.parameterLimit}
    />
  );
});
