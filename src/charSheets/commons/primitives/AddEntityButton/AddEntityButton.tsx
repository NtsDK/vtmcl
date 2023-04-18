import React from 'react';

import './AddEntityButton.css';

interface AddEntityButtonProps {
  title: string;
  onClick: () => void;
}

export function AddEntityButton(props: AddEntityButtonProps) {
  const { title, onClick } = props;

  return (
    <button
      className='AddEntityButton'
      onClick={onClick}
      aria-label={title}
      title={title}
    >
      <img className='tw-w-8' src="images/add-squared-button.svg" alt=""/>
    </button>
  );
}
