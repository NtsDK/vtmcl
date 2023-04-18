import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { LineSection } from "../../../primitives/LineSection";

import "./WeaknessSection.css";
import { StatusService } from "../../../../application/ports";

interface WeaknessSectionProps extends StatusService {
  className?: string;
}

export const WeaknessSection = memo(function WeaknessSection(
  props: WeaknessSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <LineSection
      ariaLabel={t("charsheet.status.weakness")}
      value={state.weakness}
      setValue={(value) => setState("weakness", value)}
      className={classnames("tw-text-center", className)}
    />
  );
});
