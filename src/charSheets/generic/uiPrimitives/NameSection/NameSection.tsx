import React, { ChangeEvent } from "react";
import classnames from "classnames";
import { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";

import { SelectButton } from "../SelectButton";
import { RemoveEntityButton } from "../RemoveEntityButton";
import { AddEntityButton } from "../AddEntityButton";
import { Options } from "../../../root/domain";

interface NameSectionProps {
  items: string[];
  addItem: () => void;
  removeItem: (index: number) => void;
  setItem: (index: number, name: string) => void;
  addItemMsg: string;
  removeItemMsg: string;
  className?: string;
  options?: Options;
  selectOptionMsg?: string;
  nameLabel?: ParseKeys;
}

export function NameSection(props: NameSectionProps): JSX.Element {
  const {
    items,
    addItem,
    removeItem,
    setItem,
    addItemMsg,
    removeItemMsg,
    className,
    options,
    selectOptionMsg,
    nameLabel,
  } = props;

  const { t } = useTranslation();

  const onNameChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setItem(index, value);
    };

  return (
    <div className={classnames("NameSection", className)}>
      {items.map((name, index) => (
        <div className="tw-flex tw-m-1" key={`${index}`}>
          <input
            className="tw-bg-transparent tw-flex-grow-1 tw-w-full
                tw-text-sm print:tw-w-32 tw-outline-1 tw-outline
                tw-outline-slate-700 hover:tw-outline-red-600
                print:tw-outline-transparent"
            value={name}
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
              className="tw-mr-2 tw-ml-2 print:tw-hidden"
              onChange={(value) => setItem(index, value)}
              selectOptionMsg={selectOptionMsg}
            />
          )}
          <div>
            <RemoveEntityButton
              title={removeItemMsg}
              onClick={() => removeItem(index)}
              className="tw-flex-0"
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
