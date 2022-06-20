import React, { ChangeEvent } from 'react';
import './SettingsSection.css';

import { useTranslation } from 'react-i18next';
import { useSettings } from '../../services/storageAdapter';
import { initialSettings } from '../../services/initialValues';

interface SettingsSectionProps {
}

export function SettingsSection(props: SettingsSectionProps) {
  const { t } = useTranslation();
  const { 
    settings, 
    setBackgroundColor,
    setCharsheetBackMode,
    setCharsheetBackColor,
    setCharsheetBackImage
  } = useSettings();

  function readImage(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
        const imageData = readerEvent.target?.result;
        if (typeof imageData === 'string') {
          setCharsheetBackImage(imageData);
        }
    };
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="SettingsSection">
      <div className="tw-m-4">
        <label>{t('charsheet-tab.background-color')}</label>
        <input 
          type="color" 
          className="background-color-input" 
          value={settings.backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div className="tw-m-4">
        <div className="tw-mb-4">
          <label>{t('charsheet-tab.charsheet-background-mode')}</label>
          <select 
            className="mode-select select2-mono-selector charsheet-back-mode" 
            value={settings.charsheetBackMode}
            // @ts-ignore
            onChange={(e) => setCharsheetBackMode(e.target.value)}
          >
            <option value="charsheet-image">{t('constant.charsheet-image')}</option>
            <option value="charsheet-none">{t('constant.charsheet-none')}</option>
            <option value="charsheet-color">{t('constant.charsheet-color')}</option>
          </select>
        </div>
        <div className="tw-mb-4">
          <label>{t('charsheet-tab.charsheet-background-color')}</label>
          <input 
            type="color" 
            className="charsheet-background-color-input" 
            value={settings.charsheetBackColor}
            onChange={(e) => setCharsheetBackColor(e.target.value)}
            disabled={settings.charsheetBackMode !== 'charsheet-color'}
          />
        </div>
        <div className="tw-mb-4">
          <label>{t('charsheet-tab.charsheet-background-image')}</label>
          <input 
            type="file" 
            className="charsheet-background-image-input"
            onChange={readImage}
            disabled={settings.charsheetBackMode !== 'charsheet-image'}
          />
        </div>
        <div>
          <button 
            className="back-image-to-default"
            onClick={() => setCharsheetBackImage(initialSettings.charsheetBackImage)}
            disabled={settings.charsheetBackMode !== 'charsheet-image'}
          >
            {t('charsheet-tab.to-default-background-image')}
          </button>
        </div>
      </div>
    </div>
  );
}



