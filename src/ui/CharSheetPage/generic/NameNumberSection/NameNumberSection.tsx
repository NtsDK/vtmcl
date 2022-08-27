import React, { ChangeEvent } from 'react';
import { RangeInput } from '../RangeInput';
import './NameNumberSection.css';

import classnames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { RangeInput2 } from '../RangeInput2';
import { SelectButtonOption } from '../SelectButton/type';
import { SelectButton } from '../SelectButton';

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
  sectionItemName: string;
  className?: string;
  options?: SelectButtonOption[];
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
    className,
    sectionItemName,
    options
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemName(index, value);
  }

  return (
    <div className={classnames("NameNumberSection", className)}>
      {
        items.map(({name, value}, index) =>
          <div
            className='tw-flex tw-m-1'
            key={`${sectionItemName}.${index}`}
            role="group"
            aria-labelledby={`${sectionItemName}.label.${index}`}
          >
            <input
              className='tw-bg-transparent tw-flex-grow-0 tw-text-sm tw-mr-2
                tw-w-28 print:tw-w-32 tw-outline-1 tw-outline
                tw-outline-slate-700 hover:tw-outline-red-600
                print:tw-outline-transparent'
              value={name}
              id={`${sectionItemName}.label.${index}`}
              onChange={onNameChange(index)}
            />
            {
              options &&
              <SelectButton
                options={options}
                className="tw-mr-2 print:tw-hidden"
                onChange={(value) => setItemName(index, value)}
              />
            }
            <RangeInput2
              max={5}
              name={`${sectionItemName}.${index}`}
              value={value}
              onClick={(value: number) => setItemValue(index, value)}
              className="tw-flex-grow"
            />
            <button
              className='tw-flex print:tw-hidden'
              onClick={() => removeItem(index)}
              aria-label={removeItemMsg}
              title={removeItemMsg}
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
          <img className='tw-w-8' src="images/add-squared-button.svg" alt=""/>
        </button>
      </div>
    </div>
  );
}



