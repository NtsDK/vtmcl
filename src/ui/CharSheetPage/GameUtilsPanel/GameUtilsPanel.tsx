import React from 'react';
import './GameUtilsPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

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
    <div className={classnames("GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 tw-bg-gray-200", className)}>
      <Accordion defaultActiveKey="0" className="tw-sticky tw-top-0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {t('header.checklist')}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <CharacterCheckList />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}



