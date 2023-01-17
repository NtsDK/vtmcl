import React from 'react';
import { useOtherTraits, useLimits } from '../../../../services/storageAdapter';
import { NameNumberSection } from '../../primitives/NameNumberSection';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';

interface OtherTraitsSectionProps {
  className?: string;
}

export function OtherTraitsSection(props: OtherTraitsSectionProps) {
  const {
    otherTraits,
    addOtherTrait,
    removeOtherTrait,
    setOtherTraitName,
    setOtherTraitValue
  } = useOtherTraits();
  const { t } = useTranslation();
  const { className } = props;

  const { limits } = useLimits();

  return (
    <NameNumberSection
      sectionItemName="otherTrait"
      className={classnames("OtherTraitsSection", className)}
      addItem={addOtherTrait}
      items={otherTraits}
      removeItem={removeOtherTrait}
      setItemName={setOtherTraitName}
      setItemValue={setOtherTraitValue}
      addItemMsg={t('charsheet.advantages.add-otherTrait')}
      removeItemMsg={t('charsheet.advantages.remove-otherTrait')}
      selectOptionMsg={t('charsheet.advantages.select-otherTrait')}
      nameLabel='charsheet.advantages.otherTrait-label'
      max={limits.parameterLimit}
    />
  );
}
