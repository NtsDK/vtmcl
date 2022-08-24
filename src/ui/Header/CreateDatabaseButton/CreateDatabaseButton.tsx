import React, { FormEvent, useState } from 'react';
import * as R from 'ramda';
import './CreateDatabaseButton.css';

import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { useCharSheetStorage } from '../../../services/storageAdapter';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
  initialAttributes,
  initialAbilities,
  initialAbilitiesExtension,
  initialBackgrounds,
  initialDisciplines,
  initialFlaws,
  initialHealth,
  initialMerits,
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
  const [ showModal, setShowModal ] = useState(false);

  const { setCharSheet } = useCharSheetStorage();

  function setEmptyCharSheet() {
    setCharSheet(R.clone({
      Version: CURRENT_VERSION,
      Settings: initialSettings,

      profile: initialProfile,
      attributes: initialAttributes,
      abilities: initialAbilities,
      abilitiesExtension: initialAbilitiesExtension,
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

  function onSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmptyCharSheet();
    setShowModal(false);
  }

  return (
    <>
      <Dropdown.Item
        as="button"
        type="button"
        data-original-title=""
        onClick={() => setShowModal(true)}
        // title={t('header.create-database')}
        className="CreateDatabaseButton tw-py-3 tw-text-lg"
      >
        {t('actionMenu.create-database')}
      </Dropdown.Item>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Form
          onSubmit={onSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {t('actionMenu.create-database-modal-title')}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {t('actionMenu.create-database-modal-text')}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={() => setShowModal(false)}
            >{t('common.cancel')}
            </Button>
            <Button
              variant="outline-primary"
              type="submit"
            >{t('common.confirm')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}



