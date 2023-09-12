import React from "react";
import classnames from "classnames";
import Table from "react-bootstrap/cjs/Table";
import { useTranslation } from "react-i18next";

import { CheckListBadge } from "../../charSheets/generic/checkList";
import { usePresetList } from "../../charSheets";

interface SupportedFeaturesTableProps {
  className?: string;
}

export function SupportedFeaturesTable(
  props: SupportedFeaturesTableProps,
): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const presetList = usePresetList();

  return (
    <div className={classnames("SupportedFeaturesTable", className)}>
      <h2 className="tw-text-lg">{t("about.supported-features")}</h2>
      <Table>
        <thead>
          <tr>
            <th>{t("about.char-sheet-type")}</th>
            <th>{t("about.basic-support")}</th>
            <th>{t("about.dropdown-lists")}</th>
            <th>{t("about.creation-checklist")}</th>
            <th>{t("about.freebie-points")}</th>
          </tr>
        </thead>
        <tbody>
          {presetList.map((el) => (
            <tr key={el.displayName}>
              <td>{el.displayName}</td>
              <td className="tw-text-center">
                <CheckListBadge checked={el.CharSheet !== undefined} />
              </td>
              <td className="tw-text-center">
                <CheckListBadge checked={el.getDropdownOptions !== undefined} />
              </td>
              <td className="tw-text-center">
                <CheckListBadge checked={el.CheckList !== undefined} />
              </td>
              <td className="tw-text-center">
                <CheckListBadge
                  checked={el.freebiePointsConfig !== undefined}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
