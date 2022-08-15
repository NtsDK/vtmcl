import React from 'react';
import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../../generic/NameSection';
import './MeritsSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';

interface MeritsSectionProps {
  className?: string;
}

export function MeritsSection(props: MeritsSectionProps) {
  const {
    merits,
    addMerit,
    removeMerit,
    setMerit,
  } = useMeritsNFlaws();
  const { t } = useTranslation();
  const { className } = props;

  return (
    <NameSection 
      className={classnames("MeritsSection", className)}
      addItem={addMerit}
      items={merits}
      removeItem={removeMerit}
      setItem={setMerit}
      addItemMsg={t('charsheet.misc.add-merit')}
      removeItemMsg={t('charsheet.misc.remove-merit')}
    />
  );
}



