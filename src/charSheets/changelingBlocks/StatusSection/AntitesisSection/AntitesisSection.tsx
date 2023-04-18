import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { StatusService } from "../../../../application/ports";

import { LineSection } from "../../../primitives/LineSection";

import "./AntitesisSection.css";

interface AntitesisSectionProps extends StatusService {
  className?: string;
}

export const AntitesisSection = memo(function AntitesisSection(
  props: AntitesisSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <LineSection
      ariaLabel={t("charsheet.status.antithesis")}
      value={state.antithesis}
      setValue={(value) => setState("antithesis", value)}
      className={className}
    />
  );
});
