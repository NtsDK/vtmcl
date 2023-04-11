import React from "react";
import "./GameUtilsPanel.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useTranslation } from "react-i18next";

import classnames from "classnames";
import { CharacterCheckList } from "./CharacterCheckList";
import { AccordionToggle } from "../../../uiLib/AccordionToggle";
import { FreePointsPanel } from "./FreePointsPanel";

interface GameUtilsPanelProps {
  className?: string;
}

export function GameUtilsPanel(props: GameUtilsPanelProps) {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <aside
      className={classnames(
        "GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 print:tw-hidden",
        className
      )}
    >
      <Accordion className="tw-sticky tw-top-0">
        <Card className="tw-bg-gray-200">
          <AccordionToggle
            ariaId="checklist-toggle"
            eventKey="0"
            title={t("checklist.header")}
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
        <Card className="tw-bg-gray-200">
          <AccordionToggle
            ariaId="free-points-toggle"
            eventKey="1"
            title={t("freePoints.header")}
            ariaControls="free-points-panel"
          />
          <Accordion.Collapse
            id="free-points-panel"
            eventKey="1"
            className="tw-bg-white"
            role="region"
            aria-labelledby="free-points-toggle"
          >
            <FreePointsPanel />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </aside>
  );
}
