import React from 'react';
import './AttributeSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { SectionHeader } from "../SectionHeader";
import { RangeInput } from "../RangeInput";
import { useAttributes } from '../../../services/storageAdapter';

interface AttributeSectionProps {
  className?: string;
}

export function AttributeSection(props: AttributeSectionProps) {
  const { t } = useTranslation();
  const { attributes, setAttribute } = useAttributes();
  const { className } = props;

  return (
    <div className={classnames("AttributeSection", className)}>
      <div className="custom-panel">
        
        <div className="columns attributes-container tw-flex">
          <div className='tw-flex-1'>
            <div className="stat-container">
              <label>{t('charsheet.strength')}</label>
              <RangeInput 
                max={5} 
                value={attributes.strength}
                onClick={(value: number) => setAttribute('strength', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.dexterity')}</label>
              <RangeInput 
                max={5} 
                value={attributes.dexterity}
                onClick={(value: number) => setAttribute('dexterity', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.stamina')}</label>
              <RangeInput 
                max={5} 
                value={attributes.stamina}
                onClick={(value: number) => setAttribute('stamina', value)}
                className="tw-flex-grow"
              />
            </div>
          </div>

          <div className='tw-flex-1'>
            <div className="stat-container">
              <label>{t('charsheet.charisma')}</label>
              <RangeInput 
                max={5} 
                value={attributes.charisma}
                onClick={(value: number) => setAttribute('charisma', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.manipulation')}</label>
              <RangeInput 
                max={5} 
                value={attributes.manipulation}
                onClick={(value: number) => setAttribute('manipulation', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.appearance')}</label>
              <RangeInput 
                max={5} 
                value={attributes.appearance}
                onClick={(value: number) => setAttribute('appearance', value)}
                className="tw-flex-grow"
              />
            </div>
          </div>

          <div className='tw-flex-1'>
            <div className="stat-container">
              <label>{t('charsheet.perception')}</label>
              <RangeInput 
                max={5} 
                value={attributes.perception}
                onClick={(value: number) => setAttribute('perception', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.intelligence')}</label>
              <RangeInput 
                max={5} 
                value={attributes.intelligence}
                onClick={(value: number) => setAttribute('intelligence', value)}
                className="tw-flex-grow"
              />
            </div>
            <div className="stat-container">
              <label>{t('charsheet.wits')}</label>
              <RangeInput 
                max={5} 
                value={attributes.wits}
                onClick={(value: number) => setAttribute('wits', value)}
                className="tw-flex-grow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



