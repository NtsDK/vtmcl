import React, { ChangeEvent } from 'react';
import { useDisciplines } from '../../../../services/storageAdapter';
import { RangeInput } from '../../RangeInput';
import { NameNumberSection } from '../NameNumberSection';
import './DisciplinesSection.css';

interface DisciplinesSectionProps {
}

export function DisciplinesSection(props: DisciplinesSectionProps) {
  const { 
    disciplines,
    addDiscipline,
    removeDiscipline,
    setDisciplineName,
    setDisciplineValue 
  } = useDisciplines();

  return (
    <NameNumberSection
      addItem={addDiscipline}
      items={disciplines}
      removeItem={removeDiscipline}
      setItemName={setDisciplineName}
      setItemValue={setDisciplineValue}
    />
  );
}
