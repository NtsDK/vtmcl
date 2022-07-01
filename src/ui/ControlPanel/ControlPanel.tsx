import React, { useState } from 'react';
import './ControlPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
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
        showContent && <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {t('header.actionMenu')}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <ActionList />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              {t('charsheet-tab.settings')}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <SettingsSection/>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      }
      <div className="tw-flex-1"></div>
      <Dropdown.Item
        as="button"
        type="button"
        data-original-title=""
        title={t('header.open-database')}
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



