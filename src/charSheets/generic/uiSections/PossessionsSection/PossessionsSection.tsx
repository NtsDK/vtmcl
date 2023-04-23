import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { PossessionsService } from "../../application/ports";

interface PossessionsSectionProps extends PossessionsService {
  className?: string;
}

export const PossessionsSection = memo(function PossessionsSection(
  props: PossessionsSectionProps
) {
  const { className, possessions, setPossessions } = props;
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.possessions")}
      setValue={setPossessions}
      value={possessions}
      className={classnames(
        "tw-outline-1 tw-outline tw-outline-slate-700",
        className
      )}
      rows={8}
    />
  );
});
