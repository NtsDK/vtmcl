import React from 'react';
import classnames from "classnames";
import './NotesSection.css';

import { useTranslation } from 'react-i18next';

import { useNotes } from '../../../../services/storageAdapter';
import { TextAreaSection } from '../../primitives/TextAreaSection';

interface NotesSectionProps {
  className?: string;
}

export function NotesSection(props: NotesSectionProps) {
  const { className } = props;
  const { notes, setNotes } = useNotes();
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t('charsheet.notes')}
      setValue={setNotes}
      value={notes}
      className={classnames('tw-outline-1 tw-outline tw-outline-slate-700', className)}
      rows={8}
    />
  );
}
