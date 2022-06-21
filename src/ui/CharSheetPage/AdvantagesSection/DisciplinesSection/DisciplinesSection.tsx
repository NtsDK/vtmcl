import React from 'react';
import { useDisciplines } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../NameNumberSection';
import './DisciplinesSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';

interface DisciplinesSectionProps {
  className?: string;
}

export function DisciplinesSection(props: DisciplinesSectionProps) {
  const { 
    disciplines,
    addDiscipline,
    removeDiscipline,
    setDisciplineName,
    setDisciplineValue 
  } = useDisciplines();
  const { t } = useTranslation();
  const { className } = props;

  return (
    <NameNumberSection
      className={classnames("DisciplinesSection", className)}
      addItem={addDiscipline}
      items={disciplines}
      removeItem={removeDiscipline}
      setItemName={setDisciplineName}
      setItemValue={setDisciplineValue}
      addItemMsg={t('buttons.add-discipline')}
      removeItemMsg={t('buttons.remove-discipline')}
    />
  );
}
