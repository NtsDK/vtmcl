import React from 'react';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';

import { useCharHistory } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface GoalsSectionProps {
  className?: string;
}

export function GoalsSection(props: GoalsSectionProps) {
  const { className } = props;
  const { goals, setGoals } = useCharHistory();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.goals')}
      setValue={setGoals}
      value={goals}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={3}
    />
  );
}
