import React from 'react';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';

import { useAppearance } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface AppearanceDescriptionSectionProps {
  className?: string;
}

export function AppearanceDescriptionSection(props: AppearanceDescriptionSectionProps) {
  const { className } = props;
  const { appearanceDescription, setAppearanceDescription } = useAppearance();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.appearanceDescription')}
      setValue={setAppearanceDescription}
      value={appearanceDescription}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={8}
    />
  );
}
