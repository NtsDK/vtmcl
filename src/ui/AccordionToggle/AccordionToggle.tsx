import React, { useContext } from 'react';

import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';

import './AccordionToggle.css';

interface AccordionToggleProps {
  eventKey: string;
  title: string;
  ariaId?: string;
  ariaControls?: string;
}

export function AccordionToggle(props: AccordionToggleProps) {
  const currentEventKey = useContext(AccordionContext);
  const { eventKey, title, ariaId, ariaControls } = props;

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="AccordionToggle"
      onClick={decoratedOnClick}

    >
      <Button
        id={ariaId}
        aria-controls={ariaControls}
        className="tw-py-3 tw-text-lg accordion-toggle tw-w-full"
        aria-expanded={isCurrentEventKey ? 'true' : 'false'}
      >
        {title}
        <FontAwesomeIcon
          className="tw-float-right tw-mt-1 tw-mr-2 tw-ml-4"
          icon={isCurrentEventKey ? faChevronUp : faChevronDown}
        />
      </Button>
    </h2>
  );
}
