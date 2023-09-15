import React, { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/cjs/AccordionButton";
import AccordionContext from "react-bootstrap/cjs/AccordionContext";
import Button from "react-bootstrap/cjs/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

interface AccordionToggleProps {
  eventKey: string;
  title: string;
  ariaId?: string;
  ariaControls?: string;
}

// Follows Accordion pattern
// https://www.aditus.io/patterns/accordion/
export function AccordionToggle(props: AccordionToggleProps): JSX.Element {
  const currentEventKey = useContext(AccordionContext);
  const { eventKey, title, ariaId, ariaControls } = props;

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => {},
    // console.log("totally custom!")
  );

  // опционально для работы SSG
  const isCurrentEventKey = currentEventKey?.activeEventKey === eventKey;

  return (
    <h2 className="AccordionToggle" onClick={decoratedOnClick}>
      <Button
        id={ariaId}
        aria-controls={ariaControls}
        className="tw-py-3 tw-text-lg accordion-toggle tw-w-full"
        aria-expanded={isCurrentEventKey ? "true" : "false"}
      >
        {title}
        <FontAwesomeIcon
          className={classnames(
            "tw-float-right tw-mt-1 tw-mr-2 tw-ml-4 tw-transform tw-transition-transform tw-max-w-[1.25rem]",
            {
              "tw-rotate-180": isCurrentEventKey,
              "tw-rotate-0": !isCurrentEventKey,
            },
          )}
          icon={faChevronUp}
        />
      </Button>
    </h2>
  );
}
