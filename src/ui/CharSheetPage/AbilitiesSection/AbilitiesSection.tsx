import React from 'react';
import { RangeInput } from '../RangeInput';
import { SectionHeader } from '../SectionHeader';
import { useTranslation } from 'react-i18next';
import './AbilitiesSection.css';

interface AbilitiesSectionProps {
}

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="AbilitiesSection">
      <div className="custom-panel">
        
        <div className="columns abilities-container tw-flex">
          <div>
            <div className="stat-container">
              <span>{t('charsheet.alertness')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.athletics')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.awareness')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.brawl')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.empathy')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.expression')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.intimidation')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.leadership')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.streetwise')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.subterfuge')}</span>
              <RangeInput />
            </div>
          </div>

          <div>
            <div className="stat-container">
              <span>{t('charsheet.animalken')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.crafts')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.drive')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.etiquette')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.firearms')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.larceny')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.melee')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.performance')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.stealth')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.survival')}</span>
              <RangeInput />
            </div>
          </div>

          <div>
            <div className="stat-container">
              <span>{t('charsheet.academics')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.computer')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.finance')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.investigation')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.law')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.medicine')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.occult')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.politics')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.science')}</span>
              <RangeInput />
            </div>
            <div className="stat-container">
              <span>{t('charsheet.technology')}</span>
              <RangeInput />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



