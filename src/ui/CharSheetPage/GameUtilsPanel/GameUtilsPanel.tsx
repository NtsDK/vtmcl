import React from 'react';
import './GameUtilsPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useTranslation } from 'react-i18next';

import classnames from "classnames";
import { CharacterCheckList } from './CharacterCheckList';

interface GameUtilsPanelProps {
  className?: string;
}

export function GameUtilsPanel(props: GameUtilsPanelProps) {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <aside className={classnames("GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 ", className)}>
      <Accordion defaultActiveKey="0" className="tw-sticky tw-top-0">
        <Card className="tw-bg-gray-200">
          <Accordion.Toggle 
            as={Button} 
            eventKey="0"
            className="tw-py-3 tw-text-lg accordion-toggle tw-bg-gray-200"
          >
            {t('checklist.header')}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="tw-bg-white">
            <CharacterCheckList />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </aside>
  );
}



