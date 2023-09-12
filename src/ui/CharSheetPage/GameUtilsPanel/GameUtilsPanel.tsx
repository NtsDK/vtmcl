import React from "react";
import Accordion from "react-bootstrap/cjs/Accordion";
import Card from "react-bootstrap/cjs/Card";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { AccordionToggle } from "../../../uiLib/AccordionToggle";
import { useExternalPresetProps } from "../../../charSheets";

import { FreebiePointsPanel } from "./FreebiePointsPanel/FreebiePointsPanel";
// import { FreebiePointsPanel } from "./FreebiePointsPanel";

interface GameUtilsPanelProps {
  className?: string;
}

export function GameUtilsPanel(props: GameUtilsPanelProps): JSX.Element | null {
  const { t } = useTranslation();
  const { CheckList, freebiePointsConfig } = useExternalPresetProps();

  const { className } = props;

  if (CheckList === undefined && freebiePointsConfig === undefined) {
    return null;
  }

  return (
    <aside
      className={classnames(
        "GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 print:tw-hidden",
        className,
      )}
    >
      <Accordion className="tw-sticky tw-top-0">
        {CheckList && (
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
              <div className="tw-max-w-sm">
                <CheckList />
              </div>
            </Accordion.Collapse>
          </Card>
        )}
        {freebiePointsConfig && (
          <Card className="tw-bg-gray-200">
            <AccordionToggle
              ariaId="freebie-points-toggle"
              eventKey="1"
              title={t("freebiePoints.header")}
              ariaControls="freebie-points-panel"
            />
            <Accordion.Collapse
              id="freebie-points-panel"
              eventKey="1"
              className="tw-bg-white"
              role="region"
              aria-labelledby="freebie-points-toggle"
            >
              <FreebiePointsPanel freebiePointsConfig={freebiePointsConfig} />
            </Accordion.Collapse>
          </Card>
        )}
      </Accordion>
    </aside>
  );
}
