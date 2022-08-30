import React from 'react';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useVirtues } from '../../../../services/storageAdapter';
import { Virtues } from '../../../../domain';
import { RangeInput2 } from '../../generic/RangeInput2';

import './VirtuesSection.css';

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
        virtuesArr.map((item, index) =>
          <div
            role="group"
            key={item}
            className={classnames("tw-text-sm tw-text-center print:tw-mb-0", {
              "tw-mb-2": index + 1 !== virtuesArr.length
            })}
            aria-labelledby={`virtue.label.${item}`}
          >
            <label
              id={`virtue.label.${item}`}
              className="tw-mb-1"
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



