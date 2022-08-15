import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';

import './CharSheetBody.css';

import { ProfileSection } from "../ProfileSection";
import { AttributeSection } from "../AttributeSection";
import { AbilitiesSection } from "../AbilitiesSection";
import { SectionHeader } from "../generic/SectionHeader";
import { AdvantagesSection } from '../AdvantagesSection';
import { MiscSection } from '../MiscSection';
import { NotesSection } from '../NotesSection';
import { useProfile, useSettings } from '../../../services/storageAdapter';
import { profileConfig, Settings } from '../../../domain';

interface CharSheetBodyProps {
  className?: string;
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
    charsheetBackImage_v2
  } = settings;
  if (charsheetBackMode === 'charsheet-image') {
    return `url(${charsheetBackImage_v2})`;
  }
  return 'none';
}

export function CharSheetBody(props: CharSheetBodyProps) {
  const { t } = useTranslation();

  const { profile } = useProfile();

  const [ title, setTitle ] = useState<string>('');

  useEffect(() => {
    const characterName = profile.name.trim() === ''
      ? t('charsheet.emptyName')
      : profile.name;
    setTitle(t('charsheet.charsheetWithName', {
      characterName
    }));
  }, [t, profile]);

  const { settings } = useSettings();
  const { className } = props;

  return (
    <DocumentTitle title={title}>
      <div 
        className={classnames("CharSheetBody", className)}
        style={{
          backgroundColor: getBgColor(settings),
          backgroundImage: getBgImage(settings),
        }}
      >
        <h1 className="tw-sr-only">{title}</h1>
        <SectionHeader className="tw-mb-3 tw-sr-only">{t('charsheet.profile.header')}</SectionHeader>
        <ProfileSection className="tw-mb-3" profileConfig={profileConfig}/>
        <SectionHeader className="tw-mb-3">{t('charsheet.attributes.header')}</SectionHeader>
        <AttributeSection className="tw-mb-3"/>
        <SectionHeader className="tw-mb-3">{t('charsheet.abilities.header')}</SectionHeader>
        <AbilitiesSection className="tw-mb-3"/>
        <SectionHeader className="tw-mb-3">{t('charsheet.advantages.header')}</SectionHeader>
        <AdvantagesSection className="tw-mb-3"/>
        <SectionHeader className="tw-mb-3"/>
        <MiscSection className="tw-mb-3"/>
        <SectionHeader className="tw-mb-3">{t('charsheet.notes')}</SectionHeader>
        <NotesSection />
      </div>
    </DocumentTitle>
  );
}



