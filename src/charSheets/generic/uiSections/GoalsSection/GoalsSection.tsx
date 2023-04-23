import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { HistoryService } from "../../application/ports";

interface GoalsSectionProps extends HistoryService {
  className?: string;
}

export const GoalsSection = memo(function GoalsSection(
  props: GoalsSectionProps
) {
  const { className, goals, setGoals } = props;
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.goals")}
      setValue={setGoals}
      value={goals}
      className={classnames(
        "tw-outline-1 tw-outline tw-outline-slate-700",
        className
      )}
      rows={3}
    />
  );
});
