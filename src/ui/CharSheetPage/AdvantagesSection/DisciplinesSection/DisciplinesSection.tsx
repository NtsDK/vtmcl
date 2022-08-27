import React from 'react';
import { useDisciplines } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../../generic/NameNumberSection';
import './DisciplinesSection.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../useResource';

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

  const { disciplineOptions } = useResource();

  return (
    <NameNumberSection
      sectionItemName="discipline"
      className={classnames("DisciplinesSection", className)}
      addItem={addDiscipline}
      items={disciplines}
      removeItem={removeDiscipline}
      setItemName={setDisciplineName}
      setItemValue={setDisciplineValue}
      addItemMsg={t('charsheet.advantages.add-discipline')}
      removeItemMsg={t('charsheet.advantages.remove-discipline')}
      options={disciplineOptions}
    />
  );
}
