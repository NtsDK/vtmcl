import React from "react";
import "./AdvantagesSection.css";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { RealmsSection } from "./RealmsSection";
import { ArtsSection } from "./ArtsSection";
import {
  useArts,
  useBackgrounds,
  useLimits,
  useRealms,
} from "../../../../charSheets/root/services/storageAdapter";
import { Subheader } from "../../../generic/uiPrimitives";
import { BackgroundsSection } from "../../../generic/uiSections";
import { useCtDResource } from "../../dropdownContent";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { limits } = useLimits();
  const backgroundsService = useBackgrounds();
  const artsService = useArts();
  const realmsService = useRealms();

  const { artOptions, backgroundOptions } = useCtDResource();

  return (
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.backgrounds")}
        </Subheader>
        <BackgroundsSection
          limits={limits}
          backgroundOptions={backgroundOptions}
          {...backgroundsService}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.arts")}
        </Subheader>
        <ArtsSection limits={limits} artOptions={artOptions} {...artsService} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.realms")}
        </Subheader>
        <RealmsSection {...realmsService} />
      </div>
    </div>
  );
}
