import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { StatusService } from "../../../generic/application/ports";
import { RangeInput2 } from "../../../generic/uiPrimitives";

interface AreteSectionProps extends StatusService {
  className?: string;
}

export const AreteSection = memo(function AreteSection(
  props: AreteSectionProps,
) {
  const { t } = useTranslation();
  const { state, setState, className } = props;

  return (
    <fieldset
      className={classnames("AreteSection", className)}
      aria-label={t("charsheet.status.arete")}
    >
      <RangeInput2
        max={10}
        name="arete"
        value={state.arete}
        dataContext={"arete"}
        onClick={(value: number) => setState("arete", value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
    </fieldset>
  );
});
