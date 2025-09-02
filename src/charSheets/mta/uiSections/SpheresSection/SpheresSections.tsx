import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { RangeInput2 } from "../../../generic/uiPrimitives/RangeInput2";
import { Spheres, SpheresConfig } from "../../domain";
import { SpheresService } from "../../application/ports";

interface SpheresSectionsProps extends SpheresService {
  className?: string;
}

const spheresConfig: SpheresConfig = [
  ["correspondence", "entropy", "forces"],
  ["life", "matter", "mind"],
  ["prime", "spirit", "time"],
];

export const SpheresSections = memo(function SpheresSections(
  props: SpheresSectionsProps,
) {
  const { t } = useTranslation();
  const { className, spheres, setSphere } = props;

  const setValue = useCallback(
    function setValue(value: number, sphereName: keyof Spheres) {
      setSphere(sphereName, value);
    },
    [setSphere]
  );

  return (
    <div
      className={classnames("SpheresSections tw-flex tw-gap-x-4", className)}
    >
      {spheresConfig.map((items, index) => (
        <div className="tw-flex-1" key={index}>
          {items.map((sphere) => (
            <div
              role="group"
              className="stat-container"
              key={sphere}
              aria-labelledby={`sphere.label.${sphere}`}
            >
              <label
                className="stat-container-label"
                id={`sphere.label.${sphere}`}
              >
                {t(`charsheet.advantages.${sphere}`)}
              </label>
              <RangeInput2
                max={5}
                name={`sphere.${sphere}`}
                value={spheres[sphere]}
                dataContext={sphere}
                onClick={setValue}
                className="tw-ml-4"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});
