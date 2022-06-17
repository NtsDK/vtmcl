import React from 'react';
import './CharSheetPage.css';

import { useTranslation } from 'react-i18next';
import { ProfileSection } from "./ProfileSection";
import { AttributeSection } from "./AttributeSection";
import { AbilitiesSection } from "./AbilitiesSection";
import { SectionHeader } from "./SectionHeader";
import { AdvantagesSection } from './AdvantagesSection';
import { MiscSection } from './MiscSection';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { t } = useTranslation();

  return (
    <div className="CharSheetPage">
      <ProfileSection/>
      <SectionHeader>{t('charsheet.attributes')}</SectionHeader>
      <AttributeSection/>
      <SectionHeader>{t('charsheet.abilities')}</SectionHeader>
      <AbilitiesSection/>
      <SectionHeader>{t('charsheet.advantages')}</SectionHeader>
      <AdvantagesSection/>
      <SectionHeader/>
      <MiscSection/>
      <SectionHeader>{t('charsheet.notes')}</SectionHeader>
    </div>
  );
}



