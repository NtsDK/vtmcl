import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../../i18nResources';

import './FreePoints.css';

interface FreePointsProps {
}

export function FreePoints(props: FreePointsProps) {
  const { t } = useTranslation();
  const { freePoints } = useResource();

  return (
    <div className='FreePoints tw-mx-5 tw-my-3'>
      <h3 className="tw-text-xl tw-mb-2">{t('checklist.free-point-header')}</h3>
      <p>{t('checklist.free-point-description')}</p>
      <p>{t('checklist.free-point-cost')}</p>
      <ul className="tw-ml-4">
        {
          freePoints.map(el => <li key={el}>{el}</li>)
        }
      </ul>
    </div>
  );
}
