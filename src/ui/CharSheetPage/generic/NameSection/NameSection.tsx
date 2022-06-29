import React, { ChangeEvent } from 'react';
import './NameSection.css';
import classnames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons';

interface NameSectionProps {
  items: string[];
  addItem: () => void;
  removeItem: (index: number) => void;
  setItem: (index: number, name: string) => void;
  addItemMsg: string;
  removeItemMsg: string;
  className?: string;
}

export function NameSection(props: NameSectionProps) {
  const { 
    items,
    addItem,
    removeItem,
    setItem,
    addItemMsg,
    removeItemMsg,
    className
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(index, value);
  }

  return (
    <div className={classnames("NameSection", className)}>
      {
        items.map((name, index) => <div className='tw-flex tw-m-1'>
          <input
            className='tw-bg-transparent tw-flex-grow-1 tw-w-full name-number-input tw-text-sm' 
            value={name} 
            onChange={onNameChange(index)}
          />
          <button 
            onClick={() => removeItem(index)} 
            aria-label={removeItemMsg} 
            title={removeItemMsg}
          >
            <FontAwesomeIcon
              className="tw-ml-2 tw-mr-2 tw-text-xl tw-text-gray-700"
              icon={faXmark}
            />
          </button>
        </div>)
      }
      <div className='tw-text-center tw-mt-4'>
        <button
          className='tw-w-8' 
          onClick={addItem}
          aria-label={addItemMsg} 
          title={addItemMsg}
        >
          <img src="images/add-squared-button.svg"/>
        </button>
      </div>
    </div>
  );
}



