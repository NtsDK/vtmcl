import React from 'react';
import { useMeritsNFlaws } from '../../../../services/storageAdapter';
import { NameSection } from '../NameSection';
import './FlawsSection.css';

interface FlawsSectionProps {
}

export function FlawsSection(props: FlawsSectionProps) {
  const {
    flaws,
    addFlaw,
    removeFlaw,
    setFlaw
  } = useMeritsNFlaws();

  return (
    <NameSection 
      addItem={addFlaw}
      items={flaws}
      removeItem={removeFlaw}
      setItem={setFlaw}
    />
  );
}



