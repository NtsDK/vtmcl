import React from 'react';
import './AboutPage.css';

import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
}

export function AboutPage(props: AboutPageProps) {
  const { t } = useTranslation();

  return (
    <div className="AboutPage">
      <Card>
        <Card.Body>
          <div>{t('about.about-authors')}</div>
          <br/>
          <span>{t('about.site-mention')} </span>
          <a href="http://trechkalov.com">trechkalov.com</a>
          <span>{t('about.site-description')}</span>
          <br/>
          <br/>
          <span>{t('about.program-is-free-in-rep')}</span>
          <a href="https://github.com/NtsDK/vtmcl">{t('about.by-link')}</a>
          <br/>
          <br/>
          <div>{t('about.icons-authors')}</div>
          <br/>
          <div>{t('about.versions')}</div>
          <ul>
            <li>{t('about.var010')}</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}



