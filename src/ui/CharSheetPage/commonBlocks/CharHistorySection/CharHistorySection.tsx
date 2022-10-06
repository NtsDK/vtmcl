import React from 'react';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';

import { useCharHistory } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface CharHistorySectionProps {
  className?: string;
}

export function CharHistorySection(props: CharHistorySectionProps) {
  const { className } = props;
  const { charHistory, setCharHistory } = useCharHistory();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.charHistory')}
      setValue={setCharHistory}
      value={charHistory}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={6}
    />
  );
}
