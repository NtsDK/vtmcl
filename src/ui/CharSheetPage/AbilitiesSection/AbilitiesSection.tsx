import React from 'react';
// import { SectionHeader } from '../SectionHeader';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput } from '../generic/RangeInput';
import { Subheader } from '../generic/Subheader';
import { 
  Abilities, 
  knowledgesArr, 
  skillsArr, 
  talentsArr 
} from '../../../domain';
import { useAbilities } from '../../../services/storageAdapter';

import './AbilitiesSection.css';
import { RangeInput2 } from '../generic/RangeInput2';

interface AbilitiesSectionProps {
  className?: string;
}

type AbilitiesConfig = {
  header: 'talents' | 'skills' | 'knowledges';
  items: (keyof Abilities)[]
}[];

const abilitiesConfig: AbilitiesConfig = [{
  header: 'talents',
  items: talentsArr
}, {
  header: 'skills',
  items: skillsArr
}, {
  header: 'knowledges',
  items: knowledgesArr
}];

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { abilities, setAbility } = useAbilities();

  return (
    <div className={classnames("AbilitiesSection tw-flex", className)}>
      {
        abilitiesConfig.map(({header, items}) => 
          <div className='tw-flex-1' key={header}>
            <Subheader>{t(`charsheet.abilities.${header}`)}</Subheader>
            {
              items.map(ability => 
                <div 
                  role="group" 
                  className="stat-container" 
                  key={ability}
                  aria-labelledby={`ability.label.${ability}`}
                >
                  <label 
                    className='stat-container-label'
                    id={`ability.label.${ability}`}
                  >
                    {t(`charsheet.abilities.${ability}`)}
                  </label>
                  <RangeInput2
                    max={5} 
                    name={`ability.${ability}`}
                    value={abilities[ability]}
                    onClick={(value: number) => setAbility(ability, value)}
                    className="tw-flex-grow"
                  />
                </div>
              )
            }
          </div>
        )
      }
    </div>
  );
}
