import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { RangeInput2 } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";

interface NightmareSectionProps extends StatusService {
  className?: string;
}

export const NightmareSection = memo(function NightmareSection(
  props: NightmareSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <fieldset
      className={classnames("NightmareSection", className)}
      aria-label={t("charsheet.status.nightmare")}
    >
      <RangeInput2
        max={10}
        name="nightmare"
        variant="square"
        value={state.nightmare}
        dataContext={"nightmare"}
        onClick={(value: number) => setState("nightmare", value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
    </fieldset>
  );
});
