import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Health } from '../../../../domain';
import { useStateNHealth } from '../../../../services/storageAdapter';
import { HealthInput } from '../../primitives/HealthInput';

import './HealthSection.css';

interface HealthSectionProps {
  className?: string;
}

const arr: [keyof Health, string][] = [
  ['bruised', ''],
  ['hurt', '\u22121'],
  ['injured', '\u22121'],
  ['wounded', '\u22122'],
  ['mauled', '\u22122'],
  ['crippled', '\u22125'],
  ['incapacitated', ''],
];

const iconMap: Record<number, string> = {
  0: 'images/injure_no.svg',
  1: 'images/injure_wound.svg',
  2: 'images/injure_deadly.svg',
  3: 'images/injure_aggravated.svg',
};

const healthIconStateNumber = Object.keys(iconMap).length;

export function HealthSection(props: HealthSectionProps) {
  const { health, setHealth } = useStateNHealth();
  const { t } = useTranslation();
  const { className } = props;

  return (
    <div className={classnames("HealthSection", className)}>
      {
        arr.map(([name, sublabel]) =>
          <div
            role="group"
            key={name}
            className="health-stat tw-flex tw-justify-center tw-mb-1 print:tw-mb-0"
            aria-labelledby={`healthLevel.label.${name}`}
          >
            <label
              className="tw-mb-0"
              id={`healthLevel.label.${name}`}
            >
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
          </div>
        )
      }
    </div>
  );
}
