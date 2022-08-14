import React, { ChangeEvent } from 'react';
import './SettingsSection.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <label className="tw-mr-4">{t('charsheet-tab.background-color')}</label>
        <input 
          type="color" 
          className="background-color-input" 
          value={settings.backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div className="tw-m-4">
        <h2 className='tw-text-lg tw-mb-4'>{t('charsheet-tab.charsheet-background-mode')}</h2>
        <Form.Check 
          type="radio"
          id="charsheet-none"
          name="charsheet-back-mode"
          className="tw-mb-4"
          label={t('constant.charsheet-none')}
          checked={settings.charsheetBackMode === 'charsheet-none'}
          onChange={(e) => setCharsheetBackMode('charsheet-none')}
        />
        <Form.Check 
          type="radio"
          id="charsheet-color"
          name="charsheet-back-mode"
          className="tw-mb-2"
          label={t('constant.charsheet-color')}
          checked={settings.charsheetBackMode === 'charsheet-color'}
          onChange={(e) => setCharsheetBackMode('charsheet-color')}
        />
        <fieldset className="tw-border-2 tw-border-solid tw-border-gray-600 tw-px-6 tw-py-4 tw-mb-4">
          <label className="tw-mr-4">{t('charsheet-tab.charsheet-background-color')}</label>
          <input 
            type="color" 
            className="charsheet-background-color-input" 
            value={settings.charsheetBackColor}
            onChange={(e) => setCharsheetBackColor(e.target.value)}
            disabled={settings.charsheetBackMode !== 'charsheet-color'}
          />
        </fieldset>
        <Form.Check 
          type="radio"
          id="charsheet-image"
          name="charsheet-back-mode"
          className="tw-mb-2"
          label={t('constant.charsheet-image')}
          checked={settings.charsheetBackMode === 'charsheet-image'}
          onChange={(e) => setCharsheetBackMode('charsheet-image')}
        />
        <fieldset className="tw-border-2 tw-border-solid tw-border-gray-600 tw-px-6 tw-py-4">
          <div className="tw-mb-8">
            <label>{t('charsheet-tab.charsheet-background-image')}</label>
            <input 
              type="file" 
              className="charsheet-background-image-input"
              onChange={readImage}
              disabled={settings.charsheetBackMode !== 'charsheet-image'}
            />
          </div>
          <div>
            <Button 
              className="back-image-to-default custom-btn-bg-color"
              onClick={() => setCharsheetBackImage(initialSettings.charsheetBackImage_v2)}
              disabled={settings.charsheetBackMode !== 'charsheet-image'}
            >
              {t('charsheet-tab.to-default-background-image')}
            </Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}



