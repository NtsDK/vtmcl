import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusService } from '../../../../../application/ports';

import { RatingPoolSection } from '../../../primitives/RatingPoolSection';

import './BanalitySection.css';

interface BanalitySectionProps extends StatusService {
  className?: string;
}

export const BanalitySection = memo(function BanalitySection(props: BanalitySectionProps) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

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
});
