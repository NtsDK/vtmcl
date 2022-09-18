import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { RatingPoolSection } from '../../../primitives/RatingPoolSection';

import './BanalitySection.css';

interface BanalitySectionProps {
  className?: string;
}

export function BanalitySection(props: BanalitySectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

  return (
    <RatingPoolSection
      name='banality'
      pool={state.banalityPool}
      poolAriaLabel={t('charsheet.status.banality-pool')}
      rating={state.banalityRating}
      ratingAriaLabel={t('charsheet.status.banality-rating')}
      setPool={(value) => setState('banalityPool', value)}
      setRating={(value) => setState('banalityRating', value)}
      className={className}
    />
  );
}
