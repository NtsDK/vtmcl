import React from 'react';
import './VirtuesSection.css';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useVirtues } from '../../../../services/storageAdapter';
import { Virtues } from '../../../../domain';
import { RangeInput } from '../../RangeInput';

interface VirtuesSectionProps {
  className?: string;
}

const virtuesArr: (keyof Virtues)[] = [
  'conscience',
  'self_control',
  'courage'
];

export function VirtuesSection(props: VirtuesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();
  const { setVirtue, virtues } = useVirtues();

  return (
    <div className={classnames("VirtuesSection", className)}>
      {
        virtuesArr.map(item => 
          <div className="stat-container">
            <label>{t(`charsheet.${item}`)}</label>
            <RangeInput
              max={5} 
              value={virtues[item]}
              onClick={(value: number) => setVirtue(item, value)}
              className="tw-flex-grow"
            />
          </div>  
        )
      }
    </div>
  );
}



