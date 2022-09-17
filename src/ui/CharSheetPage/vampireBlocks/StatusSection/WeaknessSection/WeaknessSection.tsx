import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStateNHealth } from '../../../../../services/storageAdapter';
import { LineSection } from '../../../primitives/LineSection';

import './WeaknessSection.css';

interface WeaknessSectionProps {
  className?: string;
}

export function WeaknessSection(props: WeaknessSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { state, setState } = useStateNHealth();

  return (
    <LineSection
      ariaLabel={t('charsheet.status.weakness')}
      value={state.weakness}
      setValue={(value) => setState('weakness', value)}
      className={className}
    />
  );
}
