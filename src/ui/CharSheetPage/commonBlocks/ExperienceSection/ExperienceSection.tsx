import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { useStateNHealth } from '../../../../services/storageAdapter';
import { LineSection } from '../../primitives/LineSection';

import './ExperienceSection.css';

interface ExperienceSectionProps {
  className?: string;
}

export function ExperienceSection(props: ExperienceSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { state, setState } = useStateNHealth();

  return (
    <LineSection
      ariaLabel={t('charsheet.status.experience')}
      value={state.experience}
      setValue={(value) => setState('experience', value)}
      className={classnames('tw-text-center', className)}
    />
  );
}
