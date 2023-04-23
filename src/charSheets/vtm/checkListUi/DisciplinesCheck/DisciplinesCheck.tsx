import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import {
  checkDisciplines,
  EXPECTED_DISCIPLINE_DOTS,
} from "../../checkListLogic/vampireCharacterChecks";
import { useDisciplines } from "../../services/storageAdapter";

interface DisciplinesCheckProps {
  className?: string;
}

export function DisciplinesCheck(props: DisciplinesCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { disciplines } = useDisciplines();
  const disciplinesFilled = useMemo(() => {
    return checkDisciplines(disciplines);
  }, [disciplines]);

  return (
    <CheckListItem
      className={classnames("DisciplinesCheck", className)}
      checked={disciplinesFilled.checked}
      text={t("checklist.discipline-dots", {
        value: disciplinesFilled.value,
        expected: EXPECTED_DISCIPLINE_DOTS,
      })}
    />
  );
}
