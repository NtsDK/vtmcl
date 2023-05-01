import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

// import { StatusService } from "../../../../../charSheets/root/application/ports";
import { Limits } from "../../../../../charSheets/root/domain";
import { RangeInput2 } from "../../../../generic/uiPrimitives";
import { StatusService } from "../../../../generic/application/ports";

interface BloodpoolSectionProps extends StatusService {
  limits: Limits;
  className?: string;
}

export const BloodpoolSection = memo(function BloodpoolSection(
  props: BloodpoolSectionProps
) {
  const { t } = useTranslation();
  const { className, limits, state, setState } = props;

  return (
    <fieldset
      className={classnames("BloodpoolSection", className)}
      aria-label={t("charsheet.status.bloodpool")}
    >
      <RangeInput2
        max={limits.bloodpool}
        name="bloodpool"
        value={state.bloodpool}
        dataContext={"bloodpool"}
        onClick={(value: number) => setState("bloodpool", value)}
        className="tw-mb-2"
        splitEvery={10}
        variant="square"
        multiplier={1.3}
      />
      <div className="tw-text-center tw-text-sm">
        <label htmlFor="bloodPerTurn.input">
          {t("charsheet.status.blood-per-turn")}
        </label>
        :
        <input
          id="bloodPerTurn.input"
          style={{ boxShadow: "0 1px 0 #333333" }}
          className="tw-flex-1
            tw-w-6 tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600"
          value={state.bloodPerTurn}
          onChange={(e) => setState("bloodPerTurn", e.target.value)}
        />
      </div>
    </fieldset>
  );
});
