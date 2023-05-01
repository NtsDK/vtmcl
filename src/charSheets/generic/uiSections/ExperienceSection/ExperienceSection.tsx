import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { LineSection } from "../../uiPrimitives/LineSection";
import { StatusService } from "../../application/ports";

interface ExperienceSectionProps extends StatusService {
  className?: string;
}

export const ExperienceSection = memo(function ExperienceSection(
  props: ExperienceSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <LineSection
      ariaLabel={t("charsheet.status.experience")}
      value={state.experience}
      setValue={(value) => setState("experience", value)}
      className={classnames("tw-text-center", className)}
    />
  );
});
