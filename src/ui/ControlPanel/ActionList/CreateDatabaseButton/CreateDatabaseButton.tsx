import React, { FormEvent, useState } from "react";
import * as R from "ramda";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/cjs/Modal";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import classnames from "classnames";

import { initialCharSheet } from "../../../../charSheets/root/services/initialValues";
import { CharSheetStorageService } from "../../../../charSheets/root/application/ports";

interface CreateDatabaseButtonProps extends CharSheetStorageService {
  className?: string;
}

export function CreateDatabaseButton(props: CreateDatabaseButtonProps) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const { setCharSheet, className } = props;

  function setEmptyCharSheet() {
    setCharSheet(R.clone(initialCharSheet));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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
        className={classnames("CreateDatabaseButton", className)}
      >
        {t("actionMenu.create-database")}
      </Dropdown.Item>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              {t("actionMenu.create-database-modal-title")}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{t("actionMenu.create-database-modal-text")}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={() => setShowModal(false)}
            >
              {t("common.cancel")}
            </Button>
            <Button variant="outline-primary" type="submit">
              {t("common.confirm")}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
