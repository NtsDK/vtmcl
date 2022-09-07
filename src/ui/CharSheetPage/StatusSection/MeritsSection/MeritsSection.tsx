import React from 'react';
import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../../generic/NameSection';
import './MeritsSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../i18nResources';

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

  const { meritOptions } = useResource();

  return (
    <NameSection
      className={classnames("MeritsSection", className)}
      addItem={addMerit}
      items={merits}
      removeItem={removeMerit}
      setItem={setMerit}
      addItemMsg={t('charsheet.status.add-merit')}
      removeItemMsg={t('charsheet.status.remove-merit')}
      options={meritOptions}
      selectOptionMsg={t('charsheet.status.select-merit')}
      nameLabel='charsheet.status.merit-label'
    />
  );
}



