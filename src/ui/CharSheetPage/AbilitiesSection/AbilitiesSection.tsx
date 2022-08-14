import React from 'react';
import { RangeInput } from '../generic/RangeInput';
// import { SectionHeader } from '../SectionHeader';
import { useTranslation } from 'react-i18next';
import './AbilitiesSection.css';
import classnames from "classnames";
import { knowledgesArr, skillsArr, talentsArr } from '../../../domain';
import { useAbilities } from '../../../services/storageAdapter';

interface AbilitiesSectionProps {
  className?: string;
}

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { abilities, setAbility } = useAbilities();

  return (
    <div className={classnames("AbilitiesSection tw-flex", className)}>
      <div className="tw-flex-1">
        {
          talentsArr.map(item => 
            <div key={item} className="stat-container">
              <label>{t(`charsheet.abilities.${item}`)}</label>
              <RangeInput
                max={5} 
                value={abilities[item]}
                onClick={(value: number) => setAbility(item, value)}
                className="tw-flex-grow"
              />
            </div>  
          )
        }
      </div>

      <div className="tw-flex-1">
        {
          skillsArr.map(item => 
            <div key={item} className="stat-container">
              <label>{t(`charsheet.abilities.${item}`)}</label>
              <RangeInput
                max={5} 
                value={abilities[item]}
                onClick={(value: number) => setAbility(item, value)}
                className="tw-flex-grow"
              />
            </div>  
          )
        }
      </div>

      <div className="tw-flex-1">
        {
          knowledgesArr.map(item => 
            <div key={item} className="stat-container">
              <label>{t(`charsheet.abilities.${item}`)}</label>
              <RangeInput
                max={5} 
                value={abilities[item]}
                onClick={(value: number) => setAbility(item, value)}
                className="tw-flex-grow"
              />
            </div>  
          )
        }
      </div>
    </div>
  );
}



