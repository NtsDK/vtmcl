import React, { memo } from 'react';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { Virtues } from '../../../../../domain';
import { RangeInput2 } from '../../../primitives/RangeInput2';

import './VirtuesSection.css';
import { VirtuesService } from '../../../../../application/ports';

interface VirtuesSectionProps extends VirtuesService {
  className?: string;
}

const virtuesArr: (keyof Virtues)[] = [
  'conscience',
  'self_control',
  'courage'
];

export const VirtuesSection = memo(function VirtuesSection(props: VirtuesSectionProps) {
  const { className, setVirtue, virtues } = props;
  const { t } = useTranslation();

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
});



