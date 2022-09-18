import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { LineSection } from '../../../primitives/LineSection';

import './AntitesisSection.css';

interface AntitesisSectionProps {
  className?: string;
}

export function AntitesisSection(props: AntitesisSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { state, setState } = useStateNHealth();

  return (
    <LineSection
      ariaLabel={t('charsheet.status.antithesis')}
      value={state.antithesis}
      setValue={(value) => setState('antithesis', value)}
      className={className}
    />
  );
}
