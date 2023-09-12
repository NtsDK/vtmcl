import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import Button from "react-bootstrap/cjs/Button";

import { CheckListBadge } from "../CheckListBadge";

interface CheckListItemProps {
  checked: boolean;
  text: string;
  className?: string;
  onFix?: () => void;
}

export function CheckListItem(props: CheckListItemProps): JSX.Element {
  const { checked, text, className, onFix } = props;
  const { t } = useTranslation();

  return (
    <li
      className={classnames("CheckListItem tw-flex tw-items-center", className)}
    >
      <label
        className={classnames("tw-grow tw-flex", {
          "tw-line-through": checked,
        })}
      >
        <CheckListBadge checked={checked} className="tw-mr-3 tw-h-fit" />
        <span>{text}</span>
      </label>
      <div className="tw-w-14 tw-text-right">
        {onFix && !checked && (
          <Button className="custom-btn-bg-color" onClick={onFix}>
            {t("checklist.fix")}
          </Button>
        )}
      </div>
    </li>
  );
}
