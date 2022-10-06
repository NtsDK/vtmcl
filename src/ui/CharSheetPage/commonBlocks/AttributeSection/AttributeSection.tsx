import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../../primitives/Subheader';
import { useAttributes, useLimits } from '../../../../services/storageAdapter';
import { RangeInput2 } from '../../primitives/RangeInput2';
import { usePresetSettings } from '../../../../i18nResources';

import './AttributeSection.css';

interface AttributeSectionProps {
  className?: string;
}

export function AttributeSection(props: AttributeSectionProps) {
  const { t } = useTranslation();
  const { attributes, setAttribute } = useAttributes();
  const { limits } = useLimits();
  const { className } = props;

  const { attributesConfig } = usePresetSettings();

  return (
    <div className={classnames("AttributeSection tw-flex tw-gap-x-4", className)}>
      {
        attributesConfig.map(({header, items}) =>
          <div className='tw-flex-1' key={header}>
            <Subheader className='print:tw-hidden'>
              {t(`charsheet.attributes.${header}`)}
            </Subheader>
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
                    max={limits.parameterLimit}
                    name={`attribute.${attribute}`}
                    value={attributes[attribute]}
                    onClick={(value: number) => setAttribute(attribute, value)}
                    className="tw-ml-4"
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
