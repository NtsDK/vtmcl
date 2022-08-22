import React from 'react';
import './GameUtilsPanel.css';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useTranslation } from 'react-i18next';

import classnames from "classnames";
import { CharacterCheckList } from './CharacterCheckList';
import { AccordionToggle } from '../../AccordionToggle';

interface GameUtilsPanelProps {
  className?: string;
}

export function GameUtilsPanel(props: GameUtilsPanelProps) {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <aside className={classnames("GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 print:tw-hidden", className)}>
      <Accordion defaultActiveKey="0" className="tw-sticky tw-top-0">
        <Card className="tw-bg-gray-200">
            <AccordionToggle
              ariaId="checklist-toggle"
              eventKey="0"
              title={t('checklist.header')}
              ariaControls="checklist-panel"
            />
            <Accordion.Collapse
              id="checklist-panel"
              eventKey="0"
              className="tw-bg-white"
              role="region"
              aria-labelledby="checklist-toggle"
            >
              <CharacterCheckList />
            </Accordion.Collapse>
        </Card>
      </Accordion>
    </aside>
  );
}



