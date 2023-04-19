import React, { MouseEventHandler } from "react";
import * as R from "ramda";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import "./HealthInput.css";

interface HealthInputProps {
  name: string;
  value: number;
  onClick: (value: number) => void;
  className?: string;
}

const damageTypes = [
  "no-damage",
  "bashing-damage",
  "lethal-damage",
  "aggravated-damage",
] as const;

export function HealthInput(props: HealthInputProps) {
  const { className, name, value, onClick } = props;
  const { t } = useTranslation();

  const onClickWrapper: MouseEventHandler<HTMLInputElement> = function (event) {
    const { index } = event.currentTarget.dataset;
    const indexNum = Number(index);
    onClick(indexNum === value ? indexNum + 1 : indexNum);
  };

  return (
    <div className={classNames("HealthInput tw-flex tw-flex-wrap", className)}>
      {damageTypes.map((damageType, index) => {
        return (
          <input
            className={classNames("health-input-checkbox tw-w-5", {
              "tw-sr-only": index !== value,
            })}
            key={damageType}
            type="radio"
            name={name}
            title={t(`charsheet.status.${damageType}`)}
            onClick={onClickWrapper}
            data-index={index}
            data-damage-type={damageType}
            checked={index === value}
            onChange={() => {}}
          />
        );
      })}
    </div>
  );
}
