import React from 'react';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';

import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../../primitives/NameSection';
import { useResource } from '../../../../i18nResources';

import './FlawsSection.css';

interface FlawsSectionProps {
  className?: string;
}

export function FlawsSection(props: FlawsSectionProps) {
  const {
    flaws,
    addFlaw,
    removeFlaw,
    setFlaw
  } = useMeritsNFlaws();
  const { t } = useTranslation();
  const { className } = props;

  const { flawOptions } = useResource();

  return (
    <NameSection
      className={classnames("FlawsSection", className)}
      addItem={addFlaw}
      items={flaws}
      removeItem={removeFlaw}
      setItem={setFlaw}
      addItemMsg={t('charsheet.status.add-flaw')}
      removeItemMsg={t('charsheet.status.remove-flaw')}
      options={flawOptions}
      selectOptionMsg={t('charsheet.status.select-flaw')}
      nameLabel='charsheet.status.flaw-label'
    />
  );
}



