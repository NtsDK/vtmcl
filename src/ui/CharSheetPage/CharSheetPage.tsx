import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useTranslation } from 'react-i18next';


import { CharSheetBody } from './CharSheetBody';
import { ProfileSection } from "./ProfileSection";
import { AttributeSection } from "./AttributeSection";
import { AbilitiesSection } from "./AbilitiesSection";
import { SectionHeader } from "./generic/SectionHeader";
import { AdvantagesSection } from './AdvantagesSection';
import { StatusSection } from './StatusSection';
import { NotesSection } from './NotesSection';

import { useProfile } from '../../services/storageAdapter';

import './CharSheetPage.css';
import { GameUtilsPanel } from './GameUtilsPanel';
import { PresetSelect } from './PresetSelect';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { t } = useTranslation();

  const { profile } = useProfile();

  const [ title, setTitle ] = useState<string>('');

  useEffect(() => {
    const characterName = profile.name.trim() === ''
      ? t('charsheet.emptyName')
      : profile.name;
    setTitle(t('about.charsheetWithName', {
      characterName
    }));
  }, [t, profile]);

  return (
    <DocumentTitle title={title}>
      <main className="CharSheetPage tw-flex">
        <div className='tw-mx-auto tw-my-0 print:tw-m-0'>
          <CharSheetBody
            className='tw-relative'
          >
            <h1 className="tw-sr-only">{title}</h1>
            <PresetSelect
              className='tw-absolute tw-top-0 tw-right-0'
            />
            <SectionHeader className="tw-mb-3 tw-sr-only">
              {t('charsheet.profile.header')}
            </SectionHeader>
            <ProfileSection
              className="tw-mb-3 tw-mt-4"
            />
            <SectionHeader className="tw-mb-3">
              {t('charsheet.attributes.header')}
            </SectionHeader>
            <AttributeSection className="tw-mb-3"/>
            <SectionHeader className="tw-mb-3">
              {t('charsheet.abilities.header')}
            </SectionHeader>
            <AbilitiesSection className="tw-mb-3"/>
            <SectionHeader className="tw-mb-3">
              {t('charsheet.advantages.header')}
            </SectionHeader>
            <AdvantagesSection className="tw-mb-3"/>
            <SectionHeader className="tw-mb-3">
              {t('charsheet.status.header')}
            </SectionHeader>
            <StatusSection className="tw-mb-3"/>
          </CharSheetBody>
          <CharSheetBody>
            <SectionHeader className="tw-mb-3">
              {t('charsheet.notes')}
            </SectionHeader>
            <NotesSection />
          </CharSheetBody>
        </div>
        <GameUtilsPanel />
      </main>
    </DocumentTitle>
  );
}



