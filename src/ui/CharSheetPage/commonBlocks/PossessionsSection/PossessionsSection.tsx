import React from 'react';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';

import { usePossessions } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface PossessionsSectionProps {
  className?: string;
}

export function PossessionsSection(props: PossessionsSectionProps) {
  const { className } = props;
  const { possessions, setPossessions } = usePossessions();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.possessions')}
      setValue={setPossessions}
      value={possessions}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={8}
    />
  );
}
