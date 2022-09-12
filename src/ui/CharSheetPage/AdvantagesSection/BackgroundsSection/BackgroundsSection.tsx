import React from 'react';
import { useBackgrounds } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../../primitives/NameNumberSection';
import './BackgroundsSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../i18nResources';

interface BackgroundsSectionProps {
  className?: string;
}

export function BackgroundsSection(props: BackgroundsSectionProps) {
  const {
    backgrounds,
    addBackground,
    setBackgroundName,
    setBackgroundValue,
    removeBackground,
  } = useBackgrounds();
  const { t } = useTranslation();
  const { className } = props;

  const { backgroundOptions } = useResource();

  return (
    <NameNumberSection
      sectionItemName="background"
      className={classnames("BackgroundsSection", className)}
      addItem={addBackground}
      items={backgrounds}
      removeItem={removeBackground}
      setItemName={setBackgroundName}
      setItemValue={setBackgroundValue}
      addItemMsg={t('charsheet.advantages.add-background')}
      removeItemMsg={t('charsheet.advantages.remove-background')}
      options={backgroundOptions}
      selectOptionMsg={t('charsheet.advantages.select-background')}
      nameLabel='charsheet.advantages.background-label'
    />
  );
}
