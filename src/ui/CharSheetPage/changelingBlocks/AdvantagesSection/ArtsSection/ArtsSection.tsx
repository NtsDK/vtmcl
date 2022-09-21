import React from 'react';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';

import { useArts } from '../../../../../services/storageAdapter';
import { NameNumberSection } from '../../../primitives/NameNumberSection';
import { useResource } from '../../../../../i18nResources';

import './ArtsSection.css';

interface ArtsSectionProps {
  className?: string;
}

export function ArtsSection(props: ArtsSectionProps) {
  const {
    arts,
    addArt,
    removeArt,
    setArtName,
    setArtValue
  } = useArts();
  const { t } = useTranslation();
  const { className } = props;

  const { artOptions } = useResource();

  return (
    <NameNumberSection
      sectionItemName="art"
      className={classnames("ArtsSection", className)}
      addItem={addArt}
      items={arts}
      removeItem={removeArt}
      setItemName={setArtName}
      setItemValue={setArtValue}
      addItemMsg={t('charsheet.advantages.add-art')}
      removeItemMsg={t('charsheet.advantages.remove-art')}
      options={artOptions}
      selectOptionMsg={t('charsheet.advantages.select-art')}
      nameLabel='charsheet.advantages.art-label'
    />
  );
}
