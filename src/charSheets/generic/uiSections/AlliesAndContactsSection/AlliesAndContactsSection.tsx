import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { AlliesAndContactsService } from "../../application/ports";

interface AlliesAndContactsSectionProps extends AlliesAndContactsService {
  className?: string;
}

export const AlliesAndContactsSection = memo(function AlliesAndContactsSection(
  props: AlliesAndContactsSectionProps
) {
  const { className, alliesAndContacts, setAlliesAndContacts } = props;
  const { t } = useTranslation();

  return (
    <TextAreaSection
      ariaLabel={t("charsheet.alliesAndContacts")}
      setValue={setAlliesAndContacts}
      value={alliesAndContacts}
      className={classnames(
        "tw-outline-1 tw-outline tw-outline-slate-700",
        className
      )}
      rows={8}
    />
  );
});
