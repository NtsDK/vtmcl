import React from 'react';
import './VirtuesSection.css';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useVirtues } from '../../../../services/storageAdapter';
import { Virtues } from '../../../../domain';
import { RangeInput } from '../../generic/RangeInput';
import { RangeInput2 } from '../../generic/RangeInput2';

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
          <div 
            role="group" 
            key={item} 
            className="stat-container"
            aria-labelledby={`virtue.label.${item}`}
          >
            <label 
              className='stat-container-label'
              id={`virtue.label.${item}`}
            >
              {t(`charsheet.advantages.${item}`)}
            </label>
            <RangeInput2
              max={5} 
              name={`virtue.${item}`}
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



