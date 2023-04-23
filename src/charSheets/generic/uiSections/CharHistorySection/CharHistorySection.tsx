import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { HistoryService } from "../../application/ports";

interface CharHistorySectionProps extends HistoryService {
  className?: string;
}

export const CharHistorySection = memo(function CharHistorySection(
  props: CharHistorySectionProps
) {
  const { className, charHistory, setCharHistory } = props;
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.charHistory")}
      setValue={setCharHistory}
      value={charHistory}
      className={classnames(
        "tw-outline-1 tw-outline tw-outline-slate-700",
        className
      )}
      rows={6}
    />
  );
});
