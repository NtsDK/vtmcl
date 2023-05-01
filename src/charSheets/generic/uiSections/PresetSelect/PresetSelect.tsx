import React, { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { PresetName, presetList } from "../../../root/domain";
import { PresetService } from "../../../../charSheets/root/application/ports";

interface PresetSelectProps extends PresetService {
  className?: string;
}

export const PresetSelect = memo(function PresetSelect(
  props: PresetSelectProps
) {
  const { className, preset, setPreset } = props;
  const { t } = useTranslation();

  return (
    <select
      className={classnames("PresetSelect", className)}
      value={preset}
      onChange={(e) => setPreset(e.currentTarget.value as PresetName)}
      aria-label={t("charsheet.type-select")}
    >
      {presetList.map((item) => (
        <option key={item} value={item}>
          {t(`charsheet.preset.${item}`)}
        </option>
      ))}
    </select>
  );
});
