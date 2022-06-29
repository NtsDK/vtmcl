import React from 'react';
import './ControlPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useTranslation } from 'react-i18next';

import { PageNav } from '../PageNav';
import { ActionList } from '../ActionList';
import { SettingsSection } from '../SettingsSection';

interface ControlPanelProps {
}

export function ControlPanel(props: ControlPanelProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* <Header /> */}
      <PageNav className='tw-flex-col tw-mb-8'/>

      <Accordion defaultActiveKey="0">
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
    </>

  );
}



