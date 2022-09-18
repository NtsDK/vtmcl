import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { RatingPoolSection } from '../../../primitives/RatingPoolSection';

import './GlamourSection.css';

interface GlamourSectionProps {
  className?: string;
}

export function GlamourSection(props: GlamourSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

  return (
    <RatingPoolSection
      name='glamour'
      pool={state.glamourPool}
      poolAriaLabel={t('charsheet.status.glamour-pool')}
      rating={state.glamourRating}
      ratingAriaLabel={t('charsheet.status.glamour-rating')}
      setPool={(value) => setState('glamourPool', value)}
      setRating={(value) => setState('glamourRating', value)}
      className={className}
    />
  );
}
