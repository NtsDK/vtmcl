import React, { memo, useCallback } from "react";

import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { Realms } from "../../../domain";

import { RangeInput2 } from "../../../../generic/uiPrimitives";
import { RealmsService } from "../../../application/ports";

interface RealmsSectionProps extends RealmsService {
  className?: string;
}

const realmsArr: (keyof Realms)[] = [
  "actor",
  "fae",
  "nature",
  "prop",
  "scene",
  "time",
];

export const RealmsSection = memo(function RealmsSection(
  props: RealmsSectionProps
) {
  const { className, realms, setRealm } = props;
  const { t } = useTranslation();

  const setValue = useCallback(
    function setValue(value: number, realmName: keyof Realms) {
      setRealm(realmName, value);
    },
    [setRealm]
  );

  return (
    <div className={classnames("RealmsSection", className)}>
      {realmsArr.map((item, index) => (
        <div
          role="group"
          key={item}
          className={classnames(
            "tw-text-sm tw-text-center print:tw-mb-0 tw-flex",
            {
              "tw-mb-1": index + 1 !== realmsArr.length,
            }
          )}
          aria-labelledby={`realm.label.${item}`}
        >
          <label
            id={`realm.label.${item}`}
            className="tw-mb-1 tw-w-28 tw-text-left"
          >
            {t(`charsheet.advantages.${item}`)}
          </label>
          <RangeInput2
            max={5}
            name={`realm.${item}`}
            value={realms[item]}
            dataContext={item}
            onClick={setValue}
            className="tw-flex-grow"
          />
        </div>
      ))}
    </div>
  );
});
