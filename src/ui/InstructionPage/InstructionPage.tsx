import React from 'react';
import { useTranslation } from 'react-i18next';
import DocumentTitle from 'react-document-title';
import Card from 'react-bootstrap/Card';

import { InstructionRu } from './InstructionRu';

import './InstructionPage.css';
import { InstructionEn } from './InstructionEn';

interface InstructionPageProps {
}

export function InstructionPage(props: InstructionPageProps) {
  const { t, i18n } = useTranslation();

  return (
    <DocumentTitle title={t('instruction.header')}>
      <main
        className="InstructionPage tw-mx-auto"
        style={{
          width: '45rem'
        }}
      >
        <Card>
          <Card.Body>
            {
              i18n.language === 'ru' &&
              <InstructionRu />
            }
            {
              i18n.language === 'en' &&
              <InstructionEn />
            }
          </Card.Body>
        </Card>
      </main>
    </DocumentTitle>
  );
}



