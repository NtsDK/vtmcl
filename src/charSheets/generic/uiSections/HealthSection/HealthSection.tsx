import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { Health } from "../../../root/domain";
import { HealthInput } from "../../uiPrimitives/HealthInput";
import { HealthService } from "../../application/ports";

interface HealthSectionProps extends HealthService {
  variant?: "common" | "changeling";
  className?: string;
}

const arr: [keyof Health, string][] = [
  ["bruised", ""],
  ["hurt", "\u22121"],
  ["injured", "\u22121"],
  ["wounded", "\u22122"],
  ["mauled", "\u22122"],
  ["crippled", "\u22125"],
  ["incapacitated", ""],
];

const iconMap: Record<number, string> = {
  0: "images/injure_no.svg",
  1: "images/injure_wound.svg",
  2: "images/injure_deadly.svg",
  3: "images/injure_aggravated.svg",
};

const healthIconStateNumber = Object.keys(iconMap).length;

export const HealthSection = memo(function HealthSection(
  props: HealthSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    variant = "common",
    health,
    setHealth,
    healthChimerical,
    setHealthChimerical,
  } = props;

  return (
    <div className={classnames("HealthSection", className)}>
      {variant === "changeling" && (
        <div className="tw-flex tw-justify-center">
          <div className="tw-w-36"></div>
          <div
            className="tw-w-5 tw-text-center"
            title={t("charsheet.status.health-real-long")}
          >
            {t("charsheet.status.health-real-short")}
          </div>
          <div
            className="tw-w-5 tw-text-center"
            title={t("charsheet.status.health-chimerical-long")}
          >
            {t("charsheet.status.health-chimerical-short")}
          </div>
        </div>
      )}
      {arr.map(([name, sublabel]) => (
        <div
          role="group"
          key={name}
          className="health-stat tw-flex tw-justify-center tw-mb-1 print:tw-mb-0"
          aria-labelledby={`healthLevel.label.${name}`}
        >
          <label className="tw-mb-0" id={`healthLevel.label.${name}`}>
            <span className="health-stat-label tw-text-sm tw-inline-block tw-w-28">
              {t(`charsheet.status.${name}`)}
            </span>
            <span className="health-stat-sublabel tw-text-sm tw-text-center tw-inline-block tw-w-8">
              {sublabel}
            </span>
          </label>
          <HealthInput
            name={`healthLevel.${name}`}
            value={health[name]}
            onClick={(value) => setHealth(name, value % healthIconStateNumber)}
          />
          {variant === "changeling" && (
            <HealthInput
              name={`healthLevel.chimerical.${name}`}
              value={healthChimerical[name]}
              onClick={(value) =>
                setHealthChimerical(name, value % healthIconStateNumber)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
});
