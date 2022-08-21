import React from 'react';
import { useTranslation } from 'react-i18next';

import './GenerationDataList.css';

interface GenerationDataListProps {
}

export function GenerationDataList(props: GenerationDataListProps) {
  const { t } = useTranslation();

  return (
    <datalist
      className="GenerationDataList"
      id="generation-data-list"
    >
      <option value=""/>
      <option value={t('charsheet.generation.4')}/>
      <option value={t('charsheet.generation.5')}/>
      <option value={t('charsheet.generation.6')}/>
      <option value={t('charsheet.generation.7')}/>
      <option value={t('charsheet.generation.8')}/>
      <option value={t('charsheet.generation.9')}/>
      <option value={t('charsheet.generation.10')}/>
      <option value={t('charsheet.generation.11')}/>
      <option value={t('charsheet.generation.12')}/>
      <option value={t('charsheet.generation.13')}/>
      <option value={t('charsheet.generation.14')}/>
      <option value={t('charsheet.generation.15')}/>
    </datalist>
  );
}
