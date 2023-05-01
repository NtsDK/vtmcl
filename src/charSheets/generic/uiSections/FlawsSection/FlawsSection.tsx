import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { NameSection } from "../../uiPrimitives/NameSection";
import { OptionGroup } from "../../../root/domain";
import { MeritsNFlawsService } from "../../application/ports";

interface FlawsSectionProps extends MeritsNFlawsService {
  flawOptions?: OptionGroup[];
  className?: string;
}

export const FlawsSection = memo(function FlawsSection(
  props: FlawsSectionProps
) {
  const { t } = useTranslation();
  const { flaws, addFlaw, removeFlaw, setFlaw, flawOptions, className } = props;

  return (
    <NameSection
      className={classnames("FlawsSection", className)}
      addItem={addFlaw}
      items={flaws}
      removeItem={removeFlaw}
      setItem={setFlaw}
      addItemMsg={t("charsheet.status.add-flaw")}
      removeItemMsg={t("charsheet.status.remove-flaw")}
      options={flawOptions}
      selectOptionMsg={t("charsheet.status.select-flaw")}
      nameLabel="charsheet.status.flaw-label"
    />
  );
});
