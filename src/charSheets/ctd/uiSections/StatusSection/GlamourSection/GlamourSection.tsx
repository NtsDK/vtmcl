import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { StatusService } from "../../../../generic/application/ports";
import { RatingPoolSection } from "../../../../generic/uiPrimitives";

interface GlamourSectionProps extends StatusService {
  className?: string;
}

export const GlamourSection = memo(function GlamourSection(
  props: GlamourSectionProps
) {
  const { t } = useTranslation();
  const { className, state, setState } = props;

  return (
    <RatingPoolSection
      name="glamour"
      pool={state.glamourPool}
      poolAriaLabel={t("charsheet.status.glamour-pool")}
      rating={state.glamourRating}
      ratingAriaLabel={t("charsheet.status.glamour-rating")}
      setPool={(value) => setState("glamourPool", value)}
      setRating={(value) => setState("glamourRating", value)}
      className={className}
    />
  );
});
