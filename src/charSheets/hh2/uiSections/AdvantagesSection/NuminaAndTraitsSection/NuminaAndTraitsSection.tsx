import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { LimitService } from "../../../../../charSheets/root/application/ports";
import { NameNumberSection } from "../../../../generic/uiPrimitives";
import { OptionGroup } from "../../../../../charSheets/root/domain";
import { NuminaAndTraitsService } from "../../../application/ports";

interface NuminaAndTraitsSectionProps
  extends NuminaAndTraitsService,
    LimitService {
  numinaAndTraitsOptions?: OptionGroup[];
  className?: string;
}

export const NuminaAndTraitsSection = memo(function NuminaAndTraitsSection(
  props: NuminaAndTraitsSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    numinaAndOtherTraits,
    addNuminaOrTrait,
    numinaAndTraitsOptions,
    removeNuminaOrTrait,
    setNuminaOrTraitName,
    setNuminaOrTraitValue,
    limits,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="numinaAndTraits"
      className={classnames("NuminaAndTraitsSection", className)}
      addItem={addNuminaOrTrait}
      items={numinaAndOtherTraits}
      removeItem={removeNuminaOrTrait}
      setItemName={setNuminaOrTraitName}
      setItemValue={setNuminaOrTraitValue}
      addItemMsg={t("charsheet.advantages.add-numinaAndOtherTrait")}
      removeItemMsg={t("charsheet.advantages.remove-numinaAndOtherTrait")}
      options={numinaAndTraitsOptions}
      selectOptionMsg={t("charsheet.advantages.select-numinaAndOtherTrait")}
      nameLabel="charsheet.advantages.numinaAndOtherTrait-label"
      max={limits.parameterLimit}
    />
  );
});
