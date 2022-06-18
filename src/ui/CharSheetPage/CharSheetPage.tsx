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

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { t } = useTranslation();

  return (
    <div className="CharSheetPage">
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



