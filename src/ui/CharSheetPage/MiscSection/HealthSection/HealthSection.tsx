import React from 'react';
import { useTranslation } from 'react-i18next';
import { Health } from '../../../../domain';
import { useStateNHealth } from '../../../../services/storageAdapter';
import './HealthSection.css';

interface HealthSectionProps {
}

const arr: [keyof Health, string][] = [
  ['bruised', ''],
  ['hurt', '-1'],
  ['injured', '-1'],
  ['wounded', '-2'],
  ['mauled', '-2'],
  ['crippled', '-5'],
  ['incapacitated', ''],
];

const iconMap: Record<number, string> = {
  0: 'images/injure_no.svg',
  1: 'images/injure_wound.svg',
  2: 'images/injure_deadly.svg',
};

export function HealthSection(props: HealthSectionProps) {
  const { health, setHealth } = useStateNHealth();
  const { t } = useTranslation();

  return (
    <div className="HealthSection">
      {
        arr.map(([name, sublabel]) => 
          <div key={name} className="health-stat tw-flex tw-justify-center tw-mb-1">
            <label className="health-stat-label tw-text-sm tw-mb-0">{t(`charsheet.misc.${name}`)}</label>
            <button 
              className='tw-w-5'
              onClick={() => setHealth(name, (health[name] + 1) % 3)}
            >
              <img className="tw-w-full" src={iconMap[health[name]]} alt=""/>
            </button>
            <span className="health-stat-sublabel tw-text-sm tw-text-center">{sublabel}</span>
          </div>
        )
      }
    </div>
  );
}
