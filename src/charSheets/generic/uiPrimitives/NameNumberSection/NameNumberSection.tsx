import React, { ChangeEvent, useCallback } from "react";
import classnames from "classnames";
import { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";

import { RangeInput2 } from "../RangeInput2";
import { SelectButton } from "../SelectButton";
import { RemoveEntityButton } from "../RemoveEntityButton";
import { AddEntityButton } from "../AddEntityButton";
import { Options } from "../../../root/domain";

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
  max: number;
  className?: string;
  options?: Options;
  selectOptionMsg?: string;
  nameLabel?: ParseKeys;
}

export function NameNumberSection(props: NameNumberSectionProps): JSX.Element {
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
    options,
    selectOptionMsg,
    nameLabel,
    max,
  } = props;

  const { t } = useTranslation();

  const onNameChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setItemName(index, value);
    };

  const setValue = useCallback(
    function setValue(value: number, index: number) {
      setItemValue(index, value);
    },
    [setItemValue]
  );

  return (
    <div className={classnames("NameNumberSection", className)}>
      {items.map(({ name, value }, index) => (
        <div
          className="tw-mb-3 print:tw-mb-1"
          key={`${sectionItemName}.${index}`}
          role="group"
          aria-labelledby={`${sectionItemName}.label.${index}`}
        >
          <div className="tw-flex">
            <input
              className="tw-bg-transparent tw-flex-1 tw-text-sm
                  tw-outline-1 tw-outline
                  tw-outline-slate-700 hover:tw-outline-red-600
                  print:tw-outline-transparent"
              value={name}
              id={`${sectionItemName}.label.${index}`}
              onChange={onNameChange(index)}
              aria-label={
                nameLabel
                  ? (t(nameLabel, { index: index + 1 }) as string)
                  : undefined
              }
            />
            {options && (
              <SelectButton
                options={options}
                className="print:tw-hidden tw-ml-2"
                onChange={(value) => setItemName(index, value)}
                selectOptionMsg={selectOptionMsg}
              />
            )}
            <RemoveEntityButton
              className="tw-ml-2"
              title={removeItemMsg}
              onClick={() => removeItem(index)}
            />
          </div>
          <RangeInput2
            max={max}
            name={`${sectionItemName}.${index}`}
            value={value}
            dataContext={index}
            onClick={setValue}
            className="tw-flex-grow tw-mt-2 print:tw-mt-1"
          />
        </div>
      ))}
      <div className="tw-text-center tw-mt-4 print:tw-hidden">
        <AddEntityButton title={addItemMsg} onClick={addItem} />
      </div>
    </div>
  );
}
