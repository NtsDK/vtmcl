import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./RemoveEntityButton.css";

interface RemoveEntityButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

export function RemoveEntityButton(props: RemoveEntityButtonProps) {
  const { title, onClick, className } = props;

  return (
    <button
      className={classnames(
        "RemoveEntityButton tw-flex print:tw-hidden tw-w-6 tw-h-6 tw-justify-center tw-items-center",
        className
      )}
      onClick={onClick}
      aria-label={title}
      title={title}
    >
      <FontAwesomeIcon
        className=" tw-w-4 tw-text-xl tw-text-gray-700"
        icon={faXmark}
      />
    </button>
  );
}
