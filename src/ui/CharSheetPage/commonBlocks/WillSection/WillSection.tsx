import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../services/storageAdapter';
import { RatingPoolSection } from '../../primitives/RatingPoolSection';

import './WillSection.css';

interface WillSectionProps {
  className?: string;
}

export function WillSection(props: WillSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

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
}

