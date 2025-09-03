import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { StatusService } from "../../../generic/application/ports";
import { RangeInput2 } from "../../../generic/uiPrimitives";

interface QuintessenceSectionProps extends StatusService {
  className?: string;
}

export const QuintessenceSection = memo(function QuintessenceSection(
  props: QuintessenceSectionProps,
) {
  const { t } = useTranslation();
  const { state, setState, className } = props;

  return (
    <fieldset
      className={classnames("QuintessenceSection", className)}
      aria-label={t("charsheet.status.quintessence")}
    >
      <RangeInput2
        max={20}
        name="quintessence"
        value={state.quintessence}
        dataContext={"quintessence"}
        onClick={(value: number) => setState("quintessence", value)}
        className="tw-mb-2"
        multiplier={1.3}
        splitEvery={10}
      />
    </fieldset>
  );
});
