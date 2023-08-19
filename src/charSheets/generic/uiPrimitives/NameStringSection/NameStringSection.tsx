import React, { ChangeEvent } from "react";
import classnames from "classnames";
import { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";

import { SelectButton } from "../SelectButton";
import { RemoveEntityButton } from "../RemoveEntityButton";
import { AddEntityButton } from "../AddEntityButton";
import { Options } from "../../../root/domain";

interface NameStringSectionProps {
  items: {
    name: string;
    level: string;
  }[];
  addItem: () => void;
  removeItem: (index: number) => void;
  setItemName: (index: number, name: string) => void;
  setItemValue: (index: number, value: string) => void;
  addItemMsg: string;
  removeItemMsg: string;
  sectionItemName: string;
  // max: number;
  className?: string;
  options?: Options;
  valueOptions?: Options;
  selectOptionMsg?: string;
  nameLabel?: ParseKeys;
}

export function NameStringSection(props: NameStringSectionProps): JSX.Element {
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
    valueOptions,
    selectOptionMsg,
    nameLabel,
    // max
  } = props;

  const { t } = useTranslation();

  const onNameChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setItemName(index, value);
    };

  return (
    <div className={classnames("NameStringSection", className)}>
      {items.map(({ name, level }, index) => (
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
            <input
              className="tw-bg-transparent tw-flex-0 tw-w-6 tw-text-sm
                  tw-outline-1 tw-outline
                  tw-outline-slate-700 hover:tw-outline-red-600
                  print:tw-outline-transparent tw-ml-2"
              value={level}
              id={`${sectionItemName}.level.${index}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setItemValue(index, e.target.value)
              }
              aria-label={
                nameLabel
                  ? (t(nameLabel, { index: index + 1 }) as string)
                  : undefined
              }
            />
            {valueOptions && (
              <SelectButton
                options={valueOptions}
                className="print:tw-hidden tw-ml-2"
                onChange={(value) => setItemValue(index, value)}
                selectOptionMsg={selectOptionMsg}
              />
            )}
            <RemoveEntityButton
              className="tw-ml-2"
              title={removeItemMsg}
              onClick={() => removeItem(index)}
            />
          </div>
        </div>
      ))}
      <div className="tw-text-center tw-mt-4 print:tw-hidden">
        <AddEntityButton title={addItemMsg} onClick={addItem} />
      </div>
    </div>
  );
}
