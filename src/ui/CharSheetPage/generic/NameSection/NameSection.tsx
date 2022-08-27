import React, { ChangeEvent } from 'react';
import './NameSection.css';
import classnames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { SelectButtonOption } from '../SelectButton/type';
import { SelectButton } from '../SelectButton';

interface NameSectionProps {
  items: string[];
  addItem: () => void;
  removeItem: (index: number) => void;
  setItem: (index: number, name: string) => void;
  addItemMsg: string;
  removeItemMsg: string;
  className?: string;
  options?: SelectButtonOption[];
}

export function NameSection(props: NameSectionProps) {
  const {
    items,
    addItem,
    removeItem,
    setItem,
    addItemMsg,
    removeItemMsg,
    className,
    options
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(index, value);
  }

  return (
    <div className={classnames("NameSection", className)}>
      {
        items.map((name, index) =>
          <div
            className='tw-flex tw-m-1'
            key={`${index}`}
          >
            <input
              className='tw-bg-transparent tw-flex-grow-1 tw-w-full
                tw-text-sm print:tw-w-32 tw-outline-1 tw-outline
                tw-outline-slate-700 hover:tw-outline-red-600
                print:tw-outline-transparent'
              value={name}
              onChange={onNameChange(index)}
            />
            {
              options &&
              <SelectButton
                options={options}
                className="tw-mr-2 tw-ml-2 print:tw-hidden"
                onChange={(value) => setItem(index, value)}
              />
            }
            <button
              onClick={() => removeItem(index)}
              aria-label={removeItemMsg}
              title={removeItemMsg}
              className="tw-flex print:tw-hidden"
            >
              <FontAwesomeIcon
                className="tw-ml-2 tw-mr-2 tw-text-xl tw-text-gray-700"
                icon={faXmark}
              />
            </button>
          </div>
        )
      }
      <div className='tw-text-center tw-mt-4 print:tw-hidden'>
        <button
          onClick={addItem}
          aria-label={addItemMsg}
          title={addItemMsg}
        >
          <img className="tw-w-8" src="images/add-squared-button.svg" alt=""/>
        </button>
      </div>
    </div>
  );
}



