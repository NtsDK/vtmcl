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
import { AccordionToggle } from '../AccordionToggle';

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
            <AccordionToggle
              ariaId="actionMenu-toggle"
              eventKey="0"
              title={t('actionMenu.header')}
              ariaControls="actionMenu-panel"
            />
            <Accordion.Collapse
              id="actionMenu-panel"
              eventKey="0"
              className="tw-bg-white"
              role="region"
              aria-labelledby="actionMenu-toggle"
            >
              <ActionList />
            </Accordion.Collapse>
          </Card>
          <Card className="tw-bg-gray-200">
            <AccordionToggle
              ariaId="visualSettings-toggle"
              eventKey="1"
              title={t('visual-settings.header')}
              ariaControls="visualSettings-panel"
            />
            <Accordion.Collapse
              id="visualSettings-panel"
              eventKey="1"
              className="tw-bg-white"
              role="region"
              aria-labelledby="visualSettings-toggle"
            >
              <SettingsSection/>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      }
      <div className="tw-flex-1"></div>
      <Dropdown.Item
        as="button"
        type="button"
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



