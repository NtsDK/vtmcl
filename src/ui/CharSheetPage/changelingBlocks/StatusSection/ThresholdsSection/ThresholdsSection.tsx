import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { TextAreaSection } from '../../../primitives/TextAreaSection';

import './ThresholdsSection.css';

interface ThresholdsSectionProps {
  className?: string;
}

export function ThresholdsSection(props: ThresholdsSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { state, setState } = useStateNHealth();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.status.thresholds')}
      value={state.thresholds}
      setValue={(value) => setState('thresholds', value)}
      className={className}
      rows={5}
    />
  );
}
