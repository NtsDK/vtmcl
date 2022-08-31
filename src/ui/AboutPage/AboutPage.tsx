import React from 'react';
import DocumentTitle from 'react-document-title';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

import './AboutPage.css';


interface AboutPageProps {
}

export function AboutPage(props: AboutPageProps) {
  const { t } = useTranslation();

  return (
    <DocumentTitle title={t('about.nav-about')}>
      <main className="AboutPage tw-mx-auto">
        <Card>
          <Card.Body>
            <div>
              <div className="tw-mb-8">
                <h1 className='tw-text-lg tw-mb-4'>{t('about.aboutCharsheetH1')}</h1>
                <p>{t('about.curVersion')}</p>
                <p>{t('about.license')}</p>
                <p>{t('about.flaticon-mention')}</p>
                <p>{t('about.flagicons-mention')}</p>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">
                  {t('about.links')}
                </h2>
                <ul>
                  <li>
                    <a href="http://trechkalov.com">
                      {t('about.developer-site')}
                    </a>
                  </li>
                  <li>
                    <a href="https://vk.com/ntsdk_wod_software">
                      {t('about.vk-group')}
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/ntsdk_wod_software">
                      {t('about.tg-channel')}
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/ntsdk_wod_software_chat">
                      {t('about.tg-chat')}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/NtsDK/vtmcl">
                      {t('about.project-source')}
                    </a>
                  </li>

                  <li>
                    <a href="http://studio101.ru">
                      {t('about.studio-101')}
                    </a>
                  </li>
                  <li>
                    <a href="https://rpgbook.ru">
                      {t('about.rpgbook')}
                    </a>
                  </li>
                  <li>
                    <a href="http://theonyxpath.com/">
                      {t('about.onyxpath')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.worldofdarkness.com/">
                      {t('about.worldofdarkness')}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">
                  {t('about.version-history')}
                </h2>
                <ul>
                  <li>
                    {t('about.version-0.2.4')}
                  </li>
                  <li>
                    {t('about.version-0.2.3')}
                  </li>
                  <li>
                    {t('about.version-0.2.2')}
                  </li>
                  <li>
                    {t('about.version-0.2.1')}
                  </li>
                  <li>
                    {t('about.version-0.1.0')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="tw-mb-8">
              <h2 className="tw-text-lg">
                {t('about.project-members')}
              </h2>
              <ul>
                <li>
                  {t('about.ntsdk')}
                </li>
                <li>
                  {t('about.mellon')}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="tw-text-lg">
                {t('about.legal-information')}
              </h2>
              <ul>
                <li>
                  {t('about.paradox-copyright')}
                </li>
                <li>
                  {t('about.studio-101-copyright')}
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </main>
    </DocumentTitle>
  );
}



