import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useTranslation } from 'react-i18next';
import { CURRENT_VERSION } from '../../../constants';

import { usePreset, useProfile } from '../../../services/storageAdapter';
import { AbilitiesSection } from '../commonBlocks/AbilitiesSection';
import { AttributeSection } from '../commonBlocks/AttributeSection';
import { PresetSelect } from '../commonBlocks/PresetSelect';
import { ProfileSection } from '../commonBlocks/ProfileSection';
import { SectionHeader } from '../primitives/SectionHeader';

import './CommonPageStart.css';

interface CommonPageStartProps {
}

export function CommonPageStart(props: CommonPageStartProps) {
  const { t } = useTranslation();

  const { profile } = useProfile();
  const { getPresetDisplayName } = usePreset();

  const [ title, setTitle ] = useState<string>('');

  useEffect(() => {
    const characterName = profile.name.trim() === ''
      ? t('charsheet.emptyName')
      : profile.name;
    setTitle(t('about.charsheetWithName', {
      characterName,
      type: getPresetDisplayName(),
      version: CURRENT_VERSION
    }));
  }, [t, profile, getPresetDisplayName]);

  return (
    <DocumentTitle title={title}>
      <>
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
      </>
    </DocumentTitle>
  );
}
