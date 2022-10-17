import React from 'react';
import { useDisciplinePaths, useLimits } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../../primitives/NameNumberSection';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../i18nResources';

interface DisciplinePathsSectionProps {
  className?: string;
}

export function DisciplinePathsSection(props: DisciplinePathsSectionProps) {
  const {
    disciplinePaths,
    addDisciplinePath,
    removeDisciplinePath,
    setDisciplinePathName,
    setDisciplinePathValue
  } = useDisciplinePaths();
  const { t } = useTranslation();
  const { className } = props;

  // const { disciplineOptions } = useResource();
  const { limits } = useLimits();

  return (
    <NameNumberSection
      sectionItemName="disciplinePath"
      className={classnames("DisciplinePathsSection", className)}
      addItem={addDisciplinePath}
      items={disciplinePaths}
      removeItem={removeDisciplinePath}
      setItemName={setDisciplinePathName}
      setItemValue={setDisciplinePathValue}
      addItemMsg={t('charsheet.advantages.add-discipline-path')}
      removeItemMsg={t('charsheet.advantages.remove-discipline-path')}
      // options={disciplineOptions}
      selectOptionMsg={t('charsheet.advantages.select-discipline-path')}
      nameLabel='charsheet.advantages.discipline-path-label'
      max={limits.parameterLimit}
    />
  );
}
