import React, { ChangeEvent } from 'react';
import { RangeInput } from '../../RangeInput';
import './NameNumberSection.css';

interface NameNumberSectionProps {
  items: {
    name: string, 
    value: number
  }[],
  addItem: () => void,
  removeItem: (index: number) => void,
  setItemName: (index: number, name: string) => void,
  setItemValue: (index: number, value: number) => void
}

export function NameNumberSection(props: NameNumberSectionProps) {
  const { 
    items,
    addItem,
    removeItem,
    setItemName,
    setItemValue
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemName(index, value);
  }

  return (
    <div className="NameNumberSection">
      {
        items.map(({name, value}, index) => <div className='tw-flex tw-m-1'>
          <input
            className='tw-bg-transparent tw-flex-grow-0 name-number-input tw-text-sm' 
            style={{width: '7rem'}}
            value={name} 
            onChange={onNameChange(index)}
          />
          <button onClick={() => removeItem(index)}>RE</button>
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
        >
          <img src="images/add-squared-button.svg"/>
        </button>
      </div>
    </div>
  );
}



