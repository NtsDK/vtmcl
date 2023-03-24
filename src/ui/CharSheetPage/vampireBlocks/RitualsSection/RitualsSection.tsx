import React, { memo } from 'react';
// import { NameNumberSection } from '../../primitives/NameNumberSection';
import { NameStringSection } from '../../primitives/NameStringSection';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';
import { OptionGroup, useResource } from '../../../../i18nResources';
import { RitualsService } from '../../../../application/ports';

interface RitualsSectionProps extends RitualsService {
  ritualOptions: OptionGroup[];
  ritualValueOptions: string[];
  className?: string;
}

export const RitualsSection = memo(function RitualsSection(props: RitualsSectionProps) {
  const { t } = useTranslation();
  const {
    className,
    ritualOptions,
    ritualValueOptions,
    rituals,
    addRitual,
    removeRitual,
    setRitualLevel,
    setRitualName
  } = props;

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
});
