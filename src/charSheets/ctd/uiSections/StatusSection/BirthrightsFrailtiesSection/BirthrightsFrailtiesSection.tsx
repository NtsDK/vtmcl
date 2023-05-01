import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { StatusService } from "../../../../generic/application/ports";
import { TextAreaSection } from "../../../../generic/uiPrimitives";

interface BirthrightsFrailtiesSectionProps extends StatusService {
  className?: string;
}

export const BirthrightsFrailtiesSection = memo(
  function BirthrightsFrailtiesSection(
    props: BirthrightsFrailtiesSectionProps
  ) {
    const { t } = useTranslation();
    const { className, state, setState } = props;

    return (
      <TextAreaSection
        ariaLabel={t("charsheet.status.birthrightsFrailties")}
        value={state.birthrightsFrailties}
        setValue={(value) => setState("birthrightsFrailties", value)}
        className={className}
        rows={7}
      />
    );
  }
);
