import React, { useState } from 'react';
import './ControlPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import { PageNav } from '../PageNav';
import { ActionList } from '../ActionList';
import { SettingsSection } from '../SettingsSection';

interface ControlPanelProps {
  className?: string;
}

export function ControlPanel(props: ControlPanelProps) {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(true);

  const { className } = props;

  return (
    <div className={classnames("ControlPanel tw-sticky tw-top-0 tw-flex tw-flex-col tw-h-screen", className)}>
      {/* <Header /> */}
      { showContent && <PageNav className='tw-flex-col tw-mb-8'/> }

      { 
        showContent && <Accordion as="aside" defaultActiveKey="0">
          <Card className="tw-bg-gray-200">
            <Accordion.Toggle 
              as={Button} 
              eventKey="0" 
              className="tw-py-3 tw-text-lg accordion-toggle"
            >
              {t('header.actionMenu')}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="tw-bg-white">
              <ActionList />
            </Accordion.Collapse>
          </Card>
          <Card className="tw-bg-gray-200">
            <Accordion.Toggle 
              as={Button} 
              eventKey="1" 
              className="tw-py-3 tw-text-lg accordion-toggle"
            >
              {t('charsheet-tab.settings')}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="tw-bg-white">
              <SettingsSection/>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      }
      <div className="tw-flex-1"></div>
      <Dropdown.Item
        as="button"
        type="button"
        // data-original-title=""
        // title={t('header.open-database')}
        onClick={() => setShowContent((prevState) => !prevState)}
        className="tw-py-3 tw-text-lg tw-flex tw-justify-end tw-items-center tw-h-16"
      >
        { showContent && <span className='tw-mr-4'>{t('buttons.hide-panel')}</span> }
        <FontAwesomeIcon
          icon={showContent ? faChevronLeft : faChevronRight}
        />
      </Dropdown.Item>
    </div>
  );
}



