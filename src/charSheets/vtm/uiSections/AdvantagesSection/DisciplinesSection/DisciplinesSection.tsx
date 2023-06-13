import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { LimitService } from "../../../../../charSheets/root/application/ports";
import { NameNumberSection } from "../../../../generic/uiPrimitives";
import { OptionGroup } from "../../../../../charSheets/root/domain";
import { DisciplinesService } from "../../../application/ports";

interface DisciplinesSectionProps extends DisciplinesService, LimitService {
  disciplineOptions?: OptionGroup[];
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
