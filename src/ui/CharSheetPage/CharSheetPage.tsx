import React from 'react';
import './CharSheetPage.css';

import { useTranslation } from 'react-i18next';
import { ProfileSection } from "./ProfileSection";
import { AttributeSection } from "./AttributeSection";
import { AbilitiesSection } from "./AbilitiesSection";
import { SectionHeader } from "./SectionHeader";
import { AdvantagesSection } from './AdvantagesSection';
import { MiscSection } from './MiscSection';
import { NotesSection } from './NotesSection';
import { useSettings } from '../../services/storageAdapter';
import { Settings } from '../../domain';

interface CharSheetPageProps {
}

function getBgColor(settings: Settings) {
  const {
    charsheetBackMode,
    charsheetBackColor,
  } = settings;
  if (charsheetBackMode === 'charsheet-color') {
    return charsheetBackColor;
  }
  return 'transparent';
}

function getBgImage(settings: Settings) {
  const {
    charsheetBackMode,
    charsheetBackImage
  } = settings;
  if (charsheetBackMode === 'charsheet-image') {
    return `url(${charsheetBackImage})`;
  }
  return 'none';
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { t } = useTranslation();

  const { settings } = useSettings();

  return (
    <div 
      className="CharSheetPage" 
      style={{
        backgroundColor: getBgColor(settings),
        backgroundImage: getBgImage(settings),
      }}
    >
      <ProfileSection className="tw-mb-3"/>
      <SectionHeader className="tw-mb-3">{t('charsheet.attributes')}</SectionHeader>
      <AttributeSection className="tw-mb-3"/>
      <SectionHeader className="tw-mb-3">{t('charsheet.abilities')}</SectionHeader>
      <AbilitiesSection className="tw-mb-3"/>
      <SectionHeader className="tw-mb-3">{t('charsheet.advantages')}</SectionHeader>
      <AdvantagesSection className="tw-mb-3"/>
      <SectionHeader className="tw-mb-3"/>
      <MiscSection className="tw-mb-3"/>
      <SectionHeader className="tw-mb-3">{t('charsheet.notes')}</SectionHeader>
      <NotesSection />
    </div>
  );
}



