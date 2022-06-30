import React from 'react';
import { CheckListBadge } from '../CheckListBadge';
import './CheckListItem.css';

import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import Button from "react-bootstrap/Button";

interface CheckListItemProps {
  checked: boolean;
  text: string;
  className?: string;
  onFix?: () => void;
}

export function CheckListItem(props: CheckListItemProps) {
  const { 
    checked, 
    text, 
    className,
    onFix
  } = props;
  const { t } = useTranslation();

  return (
    <div  className={classnames("CheckListItem tw-flex tw-items-center", className)}>
      <CheckListBadge 
        checked={checked} 
        className="tw-mr-3 tw-h-fit"
      />
      <span className="tw-grow">{text}</span>
      <div className='tw-w-14 tw-text-right'>
        {
          onFix && !checked &&
          <Button 
            style={{backgroundColor: '#007bff'}}
            onClick={onFix}
          >
            {t('checklist.fix')}
          </Button>
        }
      </div>
    </div>
  );
}



