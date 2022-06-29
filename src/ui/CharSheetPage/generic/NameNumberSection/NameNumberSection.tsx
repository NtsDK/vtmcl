import React, { ChangeEvent } from 'react';
import { RangeInput } from '../RangeInput';
import './NameNumberSection.css';

import classnames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons';

interface NameNumberSectionProps {
  items: {
    name: string;
    value: number;
  }[];
  addItem: () => void;
  removeItem: (index: number) => void;
  setItemName: (index: number, name: string) => void;
  setItemValue: (index: number, value: number) => void;
  addItemMsg: string;
  removeItemMsg: string;
  className?: string;
}

export function NameNumberSection(props: NameNumberSectionProps) {
  const { 
    items,
    addItem,
    removeItem,
    setItemName,
    setItemValue,
    addItemMsg,
    removeItemMsg,
    className
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemName(index, value);
  }

  return (
    <div className={classnames("NameNumberSection", className)}>
      {
        items.map(({name, value}, index) => <div className='tw-flex tw-m-1'>
          <input
            className='tw-bg-transparent tw-flex-grow-0 name-number-input tw-text-sm' 
            style={{width: '7rem'}}
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
          <RangeInput
            max={5} 
            value={value}
            onClick={(value: number) => setItemValue(index, value)}
            className="tw-flex-grow"
          />
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



