import React from 'react';
import { useBackgrounds } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../NameNumberSection';
import './BackgroundsSection.css';

interface BackgroundsSectionProps {
}

export function BackgroundsSection(props: BackgroundsSectionProps) {
  const { 
    backgrounds,
    addBackground,
    setBackgroundName,
    setBackgroundValue,
    removeBackground,
  } = useBackgrounds();

  return (
    <NameNumberSection
      addItem={addBackground}
      items={backgrounds}
      removeItem={removeBackground}
      setItemName={setBackgroundName}
      setItemValue={setBackgroundValue}
    />
  );
}



