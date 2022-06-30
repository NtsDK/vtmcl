import React from 'react';
import './CheckListBadge.css';

import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark, faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

interface CheckListBadgeProps {
  checked: boolean;
  className?: string;
}

export function CheckListBadge(props: CheckListBadgeProps) {
  const { checked, className } = props;
  const { t } = useTranslation();

  return (
    <Badge
      className={classnames("CheckListBadge", className)} 
      variant={checked ? "success" : 'danger'}
    >
      <FontAwesomeIcon
        icon={checked ? faCircleCheck : faCircleXmark}
      />
    </Badge>
  );
}



