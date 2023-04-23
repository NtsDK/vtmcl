import React, { memo } from "react";
import classnames from "classnames";

import { useTranslation } from "react-i18next";

import { TextAreaSection } from "../../uiPrimitives/TextAreaSection";
import { AppearanceService } from "../../application/ports";

interface AppearanceDescriptionSectionProps extends AppearanceService {
  className?: string;
}

export const AppearanceDescriptionSection = memo(
  function AppearanceDescriptionSection(
    props: AppearanceDescriptionSectionProps
  ) {
    const { className, appearanceDescription, setAppearanceDescription } =
      props;
    const { t } = useTranslation();

    return (
      <TextAreaSection
        ariaLabel={t("charsheet.appearanceDescription")}
        setValue={setAppearanceDescription}
        value={appearanceDescription}
        className={classnames(
          "tw-outline-1 tw-outline tw-outline-slate-700",
          className
        )}
        rows={8}
      />
    );
  }
);
