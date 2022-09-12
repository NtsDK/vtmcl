import React from 'react';
import classnames from "classnames";
import { useTranslation } from 'react-i18next';

import './PresetSelect.css';
import { Preset, presetList } from '../../../../domain';
import { usePreset } from '../../../../services/storageAdapter';

interface PresetSelectProps {
  className?: string;
}

export function PresetSelect(props: PresetSelectProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { preset, setPreset } = usePreset();

  return (
    <select
      className={classnames("PresetSelect", className)}
      value={preset}
      onChange={e => setPreset(e.currentTarget.value as Preset)}
    >
      {
        presetList.map(item =>
          <option key={item} value={item}>
            {t(`charsheet.preset.${item}`)}
          </option>
        )
      }
    </select>
  );
}
