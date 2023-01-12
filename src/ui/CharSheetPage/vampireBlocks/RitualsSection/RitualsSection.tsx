import React from 'react';
import { useRituals, useLimits } from '../../../../services/storageAdapter';
// import { NameNumberSection } from '../../primitives/NameNumberSection';
import { NameStringSection } from '../../primitives/NameStringSection';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { useResource } from '../../../../i18nResources';

interface RitualsSectionProps {
  className?: string;
}

export function RitualsSection(props: RitualsSectionProps) {
  const {
    rituals,
    addRitual,
    removeRitual,
    setRitualLevel,
    setRitualName
  } = useRituals();
  const { t } = useTranslation();
  const { className } = props;

  const { ritualOptions, ritualValueOptions } = useResource();

  return (
    <NameStringSection
      sectionItemName="ritual"
      className={classnames("RitualsSection", className)}
      addItem={addRitual}
      items={rituals}
      removeItem={removeRitual}
      setItemName={setRitualName}
      setItemValue={setRitualLevel}
      addItemMsg={t('charsheet.advantages.add-ritual')}
      removeItemMsg={t('charsheet.advantages.remove-ritual')}
      options={ritualOptions}
      valueOptions={ritualValueOptions}
      selectOptionMsg={t('charsheet.advantages.select-ritual')}
      nameLabel='charsheet.advantages.ritual-label'
    />
  );
}
