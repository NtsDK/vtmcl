import React from 'react';
import { RangeInput } from '../RangeInput';
import { SectionHeader } from '../SectionHeader';
import { useTranslation } from 'react-i18next';
import './AbilitiesSection.css';
import classnames from "classnames";
import { Abilities } from '../../../domain';
import { useAbilities } from '../../../services/storageAdapter';

interface AbilitiesSectionProps {
  className?: string;
}

const talentsArr: (keyof Abilities)[] = [
  'alertness',
  'athletics',
  'awareness',
  'brawl',
  'empathy',
  'expression',
  'intimidation',
  'leadership',
  'streetwise',
  'subterfuge',
];
const skillsArr: (keyof Abilities)[] = [
  'animalken',
  'crafts',
  'drive',
  'etiquette',
  'firearms',
  'larceny',
  'melee',
  'performance',
  'stealth',
  'survival',
];
const knowledgesArr: (keyof Abilities)[] = [
  'academics',
  'computer',
  'finance',
  'investigation',
  'law',
  'medicine',
  'occult',
  'politics',
  'science',
  'technology',
];

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { abilities, setAbility } = useAbilities();

  return (
    <div className={classnames("AbilitiesSection tw-flex", className)}>
      <div className="tw-flex-1">
        {
          talentsArr.map(item => 
            <div className="stat-container">
              <label>{t(`charsheet.${item}`)}</label>
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
            <div className="stat-container">
              <label>{t(`charsheet.${item}`)}</label>
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
            <div className="stat-container">
              <label>{t(`charsheet.${item}`)}</label>
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



