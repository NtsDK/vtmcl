import React from 'react';
import './FullscreenButton.css';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';

interface FullscreenButtonProps {
}

export function FullscreenButton(props: FullscreenButtonProps) {
  const { t } = useTranslation();

  function onClick() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      onClick={onClick}
      // title={t('header.fullcreen-toggle')}
      className="FullscreenButton tw-py-3 tw-text-lg"
    >
      {t('actionMenu.fullcreen-toggle')}
    </Dropdown.Item>
  );
}
