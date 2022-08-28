import React, { ChangeEvent } from 'react';
import classnames from "classnames";

import { SelectButtonOption } from '../SelectButton/type';
import { SelectButton } from '../SelectButton';
import { RemoveEntityButton } from '../RemoveEntityButton';
import { AddEntityButton } from '../AddEntityButton';

import './NameSection.css';

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
            <div>
              <RemoveEntityButton
                title={removeItemMsg}
                onClick={() => removeItem(index)}
                className="tw-flex-0"
              />
            </div>
          </div>
        )
      }
      <div className='tw-text-center tw-mt-4 print:tw-hidden'>
        <AddEntityButton
          title={addItemMsg}
          onClick={addItem}
        />
      </div>
    </div>
  );
}



