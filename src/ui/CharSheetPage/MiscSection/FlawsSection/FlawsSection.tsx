import React from 'react';
import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../../generic/NameSection';
import './FlawsSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';

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

  return (
    <NameSection 
      className={classnames("FlawsSection", className)}
      addItem={addFlaw}
      items={flaws}
      removeItem={removeFlaw}
      setItem={setFlaw}
      addItemMsg={t('charsheet.misc.add-flaw')}
      removeItemMsg={t('charsheet.misc.remove-flaw')}
    />
  );
}



