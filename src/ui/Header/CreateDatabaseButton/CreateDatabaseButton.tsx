import React from 'react';
import * as R from 'ramda';
import './CreateDatabaseButton.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { useCharSheetStorage } from '../../../services/storageAdapter';

import { 
  initialAbilities, 
  initialAttributes, 
  initialBackgrounds, 
  initialDisciplines, 
  initialFlaws, 
  initialHealth, 
  initialLog, 
  initialMerits, 
  initialMeta, 
  initialNotes, 
  initialProfile, 
  initialSettings, 
  initialState, 
  initialVirtues 
} from "../../../services/initialValues";
import { CURRENT_VERSION } from "../../../constants";

interface CreateDatabaseButtonProps {
}

export function CreateDatabaseButton(props: CreateDatabaseButtonProps) {
  const { t } = useTranslation();

  const { setCharSheet } = useCharSheetStorage();

  function setEmptyCharSheet() {
    setCharSheet(R.clone({
      Meta: initialMeta,
      Version: CURRENT_VERSION,
      Log: initialLog,
      Settings: initialSettings,

      profile: initialProfile,
      attributes: initialAttributes,
      abilities: initialAbilities,
      disciplines: initialDisciplines,
      backgrounds: initialBackgrounds, 
      virtues: initialVirtues, 
      merits: initialMerits, 
      flaws: initialFlaws,
      state: initialState, 
      health: initialHealth, 
      notes: initialNotes
    }));
  }
  
  return (
    <Dropdown.Item
      as="button"
      type="button"
      data-original-title=""
      onClick={setEmptyCharSheet}
      title={t('header.save-database')}
      className="CreateDatabaseButton tw-py-3 tw-text-lg"
    >
      {t('header.create-database')}
    </Dropdown.Item>
  );
}



