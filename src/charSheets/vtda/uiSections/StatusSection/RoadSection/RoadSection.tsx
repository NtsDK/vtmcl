import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { RangeInput2, SelectButton } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";
import { OptionGroup } from "../../../../root/domain";

interface RoadSectionProps extends StatusService {
  roadOptions: string[];
  auraOptions: OptionGroup[];
  className?: string;
}

export const RoadSection = memo(function RoadSection(props: RoadSectionProps) {
  const { t } = useTranslation();
  const { state, setState, className, roadOptions, auraOptions } = props;

  return (
    <fieldset
      className={classnames("RoadSection", className)}
      aria-label={t("charsheet.status.road")}
    >
      <div className="tw-mb-2 tw-flex">
        <input
          aria-label={t("charsheet.status.road")}
          style={{ boxShadow: "0 1px 0 #333333" }}
          className="tw-flex-1
            tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600"
          value={state.roadName}
          onChange={(e) => setState("roadName", e.target.value)}
        />
        <SelectButton
          options={roadOptions}
          className="tw-ml-2 print:tw-hidden tw-flex-0"
          onChange={(value) => setState("roadName", value)}
          selectOptionMsg={t("charsheet.status.select-path")}
        />
      </div>
      <RangeInput2
        max={10}
        name="road"
        value={state.roadValue}
        dataContext={"road"}
        onClick={(value: number) => setState("roadValue", value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
      <div className="tw-text-center tw-text-sm">
        <label htmlFor="auraName.input">{t("charsheet.status.aura")}</label>
        :
        <input
          id="auraName.input"
          style={{ boxShadow: "0 1px 0 #333333" }}
          className="tw-flex-1 tw-text-center tw-w-32
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600"
          value={state.auraName}
          onChange={(e) => setState("auraName", e.target.value)}
        />
        <SelectButton
          options={auraOptions}
          className="tw-ml-2 print:tw-hidden tw-flex-0"
          onChange={(value) => setState("auraName", value)}
          selectOptionMsg={t("charsheet.status.select-path")}
        />
        (
        <input
          aria-label={t("charsheet.status.aura-modifier")}
          style={{ boxShadow: "0 1px 0 #333333" }}
          className="tw-flex-1
            tw-w-6 tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600"
          value={state.auraModifier}
          onChange={(e) => setState("auraModifier", e.target.value)}
        />
        )
      </div>
    </fieldset>
  );
});
