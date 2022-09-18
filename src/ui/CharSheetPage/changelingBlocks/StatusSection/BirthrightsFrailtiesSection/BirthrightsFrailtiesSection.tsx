import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { TextAreaSection } from '../../../primitives/TextAreaSection';

import './BirthrightsFrailtiesSection.css';

interface BirthrightsFrailtiesSectionProps {
  className?: string;
}

export function BirthrightsFrailtiesSection(props: BirthrightsFrailtiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { state, setState } = useStateNHealth();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.status.birthrightsFrailties')}
      value={state.birthrightsFrailties}
      setValue={(value) => setState('birthrightsFrailties', value)}
      className={className}
      rows={7}
    />
  );
}
