import React, { ChangeEvent } from 'react';
import './NameSection.css';

interface NameSectionProps {
  items: string[],
  addItem: () => void,
  removeItem: (index: number) => void,
  setItem: (index: number, name: string) => void,
}

export function NameSection(props: NameSectionProps) {
  const { 
    items,
    addItem,
    removeItem,
    setItem
  } = props;

  const onNameChange = (index: number ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(index, value);
  }

  return (
    <div className="NameSection">
      {
        items.map((name, index) => <div className='tw-flex tw-m-1'>
          <input
            className='tw-bg-transparent tw-flex-grow-0 name-number-input tw-text-sm' 
            style={{width: '7rem'}}
            value={name} 
            onChange={onNameChange(index)}
          />
          <button onClick={() => removeItem(index)}>RE</button>
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



