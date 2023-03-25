import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StateNHealthService } from '../../../../../application/ports';

import { TextAreaSection } from '../../../primitives/TextAreaSection';

import './BirthrightsFrailtiesSection.css';

interface BirthrightsFrailtiesSectionProps extends StateNHealthService {
  className?: string;
}

export const BirthrightsFrailtiesSection = memo(function BirthrightsFrailtiesSection(
  props: BirthrightsFrailtiesSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.status.birthrightsFrailties')}
      value={state.birthrightsFrailties}
      setValue={(value) => setState('birthrightsFrailties', value)}
      className={className}
      rows={7}
    />
  );
});
