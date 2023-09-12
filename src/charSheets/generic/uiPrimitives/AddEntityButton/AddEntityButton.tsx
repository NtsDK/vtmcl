import React from "react";
import addSquaredButtonImgUrl from "../../../../../images/add-squared-button.svg";

interface AddEntityButtonProps {
  title: string;
  onClick: () => void;
}

export function AddEntityButton(props: AddEntityButtonProps): JSX.Element {
  const { title, onClick } = props;

  return (
    <button
      className="AddEntityButton"
      onClick={onClick}
      aria-label={title}
      title={title}
    >
      <img className="tw-w-8" src={addSquaredButtonImgUrl} alt="" />
    </button>
  );
}
