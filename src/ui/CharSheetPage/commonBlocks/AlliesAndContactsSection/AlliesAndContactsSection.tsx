import React from 'react';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';

import { useAlliesAndContacts } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface AlliesAndContactsSectionProps {
  className?: string;
}

export function AlliesAndContactsSection(props: AlliesAndContactsSectionProps) {
  const { className } = props;
  const { alliesAndContacts, setAlliesAndContacts } = useAlliesAndContacts();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.alliesAndContacts')}
      setValue={setAlliesAndContacts}
      value={alliesAndContacts}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={8}
    />
  );
}
