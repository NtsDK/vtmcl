import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StateNHealthService } from '../../../../application/ports';

import { RatingPoolSection } from '../../primitives/RatingPoolSection';

import './WillSection.css';

interface WillSectionProps extends StateNHealthService {
  className?: string;
}

export const WillSection = memo(function WillSection(props: WillSectionProps) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <RatingPoolSection
      name='willpower'
      pool={state.willpowerPool}
      poolAriaLabel={t('charsheet.status.willpower-pool')}
      rating={state.willpowerRating}
      ratingAriaLabel={t('charsheet.status.willpower-rating')}
      setPool={(value) => setState('willpowerPool', value)}
      setRating={(value) => setState('willpowerRating', value)}
      className={className}
    />
  );
});
