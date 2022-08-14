import React from 'react';
import './AttributeSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput } from "../generic/RangeInput";
import { useAttributes } from '../../../services/storageAdapter';
import { 
  physicalAttributesArr,
  socialAttributesArr,
  mentalAttributesArr
} from '../../../domain';

interface AttributeSectionProps {
  className?: string;
}

export function AttributeSection(props: AttributeSectionProps) {
  const { t } = useTranslation();
  const { attributes, setAttribute } = useAttributes();
  const { className } = props;

  return (
    <div className={classnames("AttributeSection tw-flex", className)}>
      <div className='tw-flex-1'>
        {
          physicalAttributesArr.map(attribute => 
            <div className="stat-container" key={attribute}>
              <label>{t(`charsheet.attributes.${attribute}`)}</label>
              <RangeInput 
                max={5} 
                value={attributes[attribute]}
                onClick={(value: number) => setAttribute(attribute, value)}
                className="tw-flex-grow"
              />
            </div>
          )
        }
      </div>

      <div className='tw-flex-1'>
        {
          socialAttributesArr.map(attribute => 
            <div className="stat-container" key={attribute}>
              <label>{t(`charsheet.attributes.${attribute}`)}</label>
              <RangeInput 
                max={5} 
                value={attributes[attribute]}
                onClick={(value: number) => setAttribute(attribute, value)}
                className="tw-flex-grow"
              />
            </div>
          )
        }
      </div>

      <div className='tw-flex-1'>
        {
          mentalAttributesArr.map(attribute => 
            <div className="stat-container" key={attribute}>
              <label>{t(`charsheet.attributes.${attribute}`)}</label>
              <RangeInput 
                max={5} 
                value={attributes[attribute]}
                onClick={(value: number) => setAttribute(attribute, value)}
                className="tw-flex-grow"
              />
            </div>
          )
        }
      </div>
    </div>
  );
}



