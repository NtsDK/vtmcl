import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput } from "../generic/RangeInput";
import { Subheader } from '../generic/Subheader';
import { useAttributes } from '../../../services/storageAdapter';
import {
  physicalAttributesArr,
  socialAttributesArr,
  mentalAttributesArr,
  Attributes
} from '../../../domain';
import { RangeInput2 } from '../generic/RangeInput2';

import './AttributeSection.css';

interface AttributeSectionProps {
  className?: string;
}

type AttributesConfig = {
  header: 'physical' | 'social' | 'mental';
  items: (keyof Attributes)[]
}[];

const attributesConfig: AttributesConfig = [{
  header: 'physical',
  items: physicalAttributesArr
}, {
  header: 'social',
  items: socialAttributesArr
}, {
  header: 'mental',
  items: mentalAttributesArr
}];

export function AttributeSection(props: AttributeSectionProps) {
  const { t } = useTranslation();
  const { attributes, setAttribute } = useAttributes();
  const { className } = props;

  return (
    <div className={classnames("AttributeSection tw-flex", className)}>
      {
        attributesConfig.map(({header, items}) =>
          <div className='tw-flex-1' key={header}>
            <Subheader>{t(`charsheet.attributes.${header}`)}</Subheader>
            {
              items.map(attribute =>
                <div
                  role="group"
                  className="stat-container"
                  key={attribute}
                  aria-labelledby={`attribute.label.${attribute}`}
                >
                  <label
                    className='stat-container-label'
                    id={`attribute.label.${attribute}`}
                  >
                    {t(`charsheet.attributes.${attribute}`)}
                  </label>
                  <RangeInput2
                    max={5}
                    name={`attribute.${attribute}`}
                    value={attributes[attribute]}
                    onClick={(value: number) => setAttribute(attribute, value)}
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
