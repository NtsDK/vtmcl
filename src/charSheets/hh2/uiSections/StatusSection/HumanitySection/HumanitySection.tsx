import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { RangeInput2 } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";

interface HumanitySectionProps extends StatusService {
  className?: string;
}

export const HumanitySection = memo(function HumanitySection(
  props: HumanitySectionProps
) {
  const { t } = useTranslation();
  const { state, setState, className } = props;

  return (
    <fieldset
      className={classnames("HumanitySection", className)}
      aria-label={t("charsheet.status.humanity")}
    >
      <RangeInput2
        max={10}
        name="humanity"
        value={state.humanity}
        dataContext={"humanity"}
        onClick={(value: number) => setState("humanity", value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
    </fieldset>
  );
});
