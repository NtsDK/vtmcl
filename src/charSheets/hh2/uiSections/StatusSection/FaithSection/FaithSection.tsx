import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { RangeInput2 } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";

interface FaithSectionProps extends StatusService {
  className?: string;
}

export const FaithSection = memo(function FaithSection(
  props: FaithSectionProps
) {
  const { t } = useTranslation();
  const { state, setState, className } = props;

  return (
    <fieldset
      className={classnames("FaithSection", className)}
      aria-label={t("charsheet.status.faith")}
    >
      <RangeInput2
        max={5}
        name="faith"
        value={state.faith}
        dataContext={"faith"}
        onClick={(value: number) => setState("faith", value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
    </fieldset>
  );
});
