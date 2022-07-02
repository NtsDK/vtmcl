import React from 'react';
import classnames from "classnames";
import './NotesSection.css';

import { useTranslation } from 'react-i18next';

import { useNotes } from '../../../services/storageAdapter';

interface NotesSectionProps {
  className?: string;
}

export function NotesSection(props: NotesSectionProps) {
  const { className } = props;
  const { notes, setNotes } = useNotes();
  const { t } = useTranslation();

  return (
    <div className={classnames("NotesSection", className)}>
      <textarea 
        className='tw-w-full tw-h-48 tw-bg-transparent' 
        value={notes}
        aria-label={t('charsheet.notes')}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </div>
  );
}



