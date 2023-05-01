import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { NameSection } from "../../uiPrimitives/NameSection";

import { OptionGroup } from "../../../root/domain";
import { MeritsNFlawsService } from "../../application/ports";

interface MeritsSectionProps extends MeritsNFlawsService {
  meritOptions?: OptionGroup[];
  className?: string;
}

export const MeritsSection = memo(function MeritsSection(
  props: MeritsSectionProps
) {
  const { t } = useTranslation();
  const { merits, addMerit, removeMerit, setMerit, meritOptions, className } =
    props;

  return (
    <NameSection
      className={classnames("MeritsSection", className)}
      addItem={addMerit}
      items={merits}
      removeItem={removeMerit}
      setItem={setMerit}
      addItemMsg={t("charsheet.status.add-merit")}
      removeItemMsg={t("charsheet.status.remove-merit")}
      options={meritOptions}
      selectOptionMsg={t("charsheet.status.select-merit")}
      nameLabel="charsheet.status.merit-label"
    />
  );
});
