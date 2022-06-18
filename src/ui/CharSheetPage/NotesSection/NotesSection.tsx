import React from 'react';
import classnames from "classnames";
import './NotesSection.css';
import { useNotes } from '../../../services/storageAdapter';

interface NotesSectionProps {
  className?: string;
}

export function NotesSection(props: NotesSectionProps) {
  const { className } = props;
  const { notes, setNotes } = useNotes();

  return (
    <div className={classnames("NotesSection", className)}>
      <textarea 
        className='tw-w-full tw-h-48 tw-bg-transparent' 
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </div>
  );
}



