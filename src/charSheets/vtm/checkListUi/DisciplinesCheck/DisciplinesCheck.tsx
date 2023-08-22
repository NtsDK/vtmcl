import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkDisciplines } from "../../checkListLogic";
import { useDisciplines } from "../../services/storageAdapter";

interface DisciplinesCheckProps {
  expectedDisciplineDots: number;
  className?: string;
}

export function DisciplinesCheck(props: DisciplinesCheckProps): JSX.Element {
  const { className, expectedDisciplineDots } = props;
  const { t } = useTranslation();

  const { disciplines } = useDisciplines();
  const disciplinesFilled = useMemo(() => {
    return checkDisciplines(disciplines, expectedDisciplineDots);
  }, [disciplines]);

  return (
    <CheckListItem
      className={classnames("DisciplinesCheck", className)}
      checked={disciplinesFilled.checked}
      text={t("checklist.discipline-dots", {
        value: disciplinesFilled.value,
        expected: expectedDisciplineDots,
      })}
    />
  );
}
