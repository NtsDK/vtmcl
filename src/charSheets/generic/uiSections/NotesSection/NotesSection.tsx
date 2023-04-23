import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { NotesService } from "../../application/ports";

interface NotesSectionProps extends NotesService {
  className?: string;
}

export const NotesSection = memo(function NotesSection(
  props: NotesSectionProps
) {
  const { className, notes, setNotes } = props;
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.notes")}
      setValue={setNotes}
      value={notes}
      className={classnames(
        "tw-outline-1 tw-outline tw-outline-slate-700",
        className
      )}
      rows={8}
    />
  );
});
