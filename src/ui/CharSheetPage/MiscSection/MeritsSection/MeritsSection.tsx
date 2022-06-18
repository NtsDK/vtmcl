import React from 'react';
import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../NameSection';
import './MeritsSection.css';

interface MeritsSectionProps {
}

export function MeritsSection(props: MeritsSectionProps) {
  const {
    merits,
    addMerit,
    removeMerit,
    setMerit
  } = useMeritsNFlaws();

  return (
    <NameSection 
      addItem={addMerit}
      items={merits}
      removeItem={removeMerit}
      setItem={setMerit}
    />
  );
}



