import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { TextAreaSection } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";

interface ThresholdsSectionProps extends StatusService {
  className?: string;
}

export const ThresholdsSection = memo(function ThresholdsSection(
  props: ThresholdsSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.status.thresholds")}
      value={state.thresholds}
      setValue={(value) => setState("thresholds", value)}
      className={classnames("tw-text-center", className)}
      rows={3}
    />
  );
});
