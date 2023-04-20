import React, { memo } from "react";
import "./DisciplinesSection.css";

import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { OptionGroup, useResource } from "../../../../../i18nResources";
import {
  DisciplinesService,
  LimitService,
} from "../../../../../application/ports";
import { NameNumberSection } from "../../../../commons/uiPrimitives";

interface DisciplinesSectionProps extends DisciplinesService, LimitService {
  disciplineOptions: OptionGroup[];
  className?: string;
}

export const DisciplinesSection = memo(function DisciplinesSection(
  props: DisciplinesSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    disciplines,
    addDiscipline,
    removeDiscipline,
    setDisciplineName,
    setDisciplineValue,
    disciplineOptions,
    limits,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="discipline"
      className={classnames("DisciplinesSection", className)}
      addItem={addDiscipline}
      items={disciplines}
      removeItem={removeDiscipline}
      setItemName={setDisciplineName}
      setItemValue={setDisciplineValue}
      addItemMsg={t("charsheet.advantages.add-discipline")}
      removeItemMsg={t("charsheet.advantages.remove-discipline")}
      options={disciplineOptions}
      selectOptionMsg={t("charsheet.advantages.select-discipline")}
      nameLabel="charsheet.advantages.discipline-label"
      max={limits.parameterLimit}
    />
  );
});
