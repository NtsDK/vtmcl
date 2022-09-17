import React from 'react';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useRealms } from '../../../../../services/storageAdapter';
import { Realms } from '../../../../../domain';
import { RangeInput2 } from '../../../primitives/RangeInput2';

import './RealmsSection.css';

interface RealmsSectionProps {
  className?: string;
}

const realmsArr: (keyof Realms)[] = [
  'actor',
  'fae',
  'nature',
  'prop',
  'scene',
  'time',
];

export function RealmsSection(props: RealmsSectionProps) {
  const { className } = props;
  const { t } = useTranslation();
  const { realms, setRealm } = useRealms();

  return (
    <div className={classnames("RealmsSection", className)}>
      {
        realmsArr.map((item, index) =>
          <div
            role="group"
            key={item}
            className={classnames("tw-text-sm tw-text-center print:tw-mb-0 tw-flex", {
              "tw-mb-1": index + 1 !== realmsArr.length
            })}
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
              onClick={(value: number) => setRealm(item, value)}
              className="tw-flex-grow"
            />
          </div>
        )
      }
    </div>
  );
}
