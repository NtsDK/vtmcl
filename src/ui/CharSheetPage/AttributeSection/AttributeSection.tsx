import React from 'react';
import './AttributeSection.css';
import { useTranslation } from 'react-i18next';

import { SectionHeader } from "../SectionHeader";
import { RangeInput } from "../RangeInput";

interface AttributeSectionProps {
}

export function AttributeSection(props: AttributeSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="AttributeSection">
      <div className="custom-panel">
        
        <div className="columns attributes-container tw-flex">
          <div>
            <div className="stat-container">
              <span>{t('charsheet.strength')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.dexterity')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.stamina')}</span>
              <RangeInput />
            </div>
          </div>
          <div>
            <div className="stat-container">
              <span>{t('charsheet.charisma')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.manipulation')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.appearance')}</span>
              <RangeInput />
            </div>
          </div>
          <div>
            <div className="stat-container">
              <span>{t('charsheet.perception')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.intelligence')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.wits')}</span>
              <RangeInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



