import React from "react";
import DocumentTitle from "react-document-title";
import Card from "react-bootstrap/cjs/Card";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faVk, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

import { ExternalLink } from "../../uiLib/ExternalLink";
import { UnorderedList } from "../../uiLib/UnorderedList";
import { CURRENT_VERSION } from "../../constants";

import { SupportedFeaturesTable } from "./SupportedFeaturesTable";

interface AboutPageProps {}

export function AboutPage(props: AboutPageProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <DocumentTitle title={t("about.header")}>
      <main
        className="AboutPage tw-mx-auto"
        style={{
          width: "45rem",
        }}
      >
        <Card>
          <Card.Body>
            <div>
              <div className="tw-mb-8">
                <h1 className="tw-text-lg tw-mb-4">
                  {t("about.aboutCharsheetH1")}
                </h1>
                <p>
                  {t("about.curVersion", {
                    version: CURRENT_VERSION,
                  })}
                </p>
                <p>{t("about.license")}</p>
                <p>{t("about.flaticon-mention")}</p>
                <p>{t("about.flagicons-mention")}</p>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">{t("about.links")}</h2>
                <UnorderedList className="!tw-list-none">
                  <li>
                    <ExternalLink
                      href={`https://trechkalov.com/archives/wod_character_sheet_ru_en_${CURRENT_VERSION}.zip`}
                    >
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faBoxArchive}
                      />
                      {t("about.charsheet-archive")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://trechkalov.com">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faGlobe}
                      />
                      {t("about.developer-site")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://vk.com/ntsdk_wod_software">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faVk}
                      />
                      {t("about.vk-group")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://t.me/ntsdk_wod_software">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faTelegram}
                      />
                      {t("about.tg-channel")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://t.me/ntsdk_wod_software_chat">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faTelegram}
                      />
                      {t("about.tg-chat")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://t.me/ntsdk_dev">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faTelegram}
                      />
                      {t("about.tg-developer-channel")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://github.com/NtsDK/vtmcl">
                      <FontAwesomeIcon
                        className=" tw-text-lg tw-text-gray-700 tw-mr-2"
                        icon={faGithub}
                      />
                      {t("about.project-source")}
                    </ExternalLink>
                  </li>
                </UnorderedList>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">
                  {t("about.thirdPartyLinks")}
                </h2>
                <UnorderedList>
                  <li>
                    <ExternalLink href="http://studio101.ru">
                      {t("about.studio-101")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://rpgbook.ru">
                      {t("about.rpgbook")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="http://theonyxpath.com/">
                      {t("about.onyxpath")}
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://www.worldofdarkness.com/">
                      {t("about.worldofdarkness")}
                    </ExternalLink>
                  </li>
                </UnorderedList>
              </div>

              <SupportedFeaturesTable className="tw-mb-8" />

              <div className="tw-mb-8">
                <h2 className="tw-text-lg tw-mb-4">
                  {t("about.version-history")}
                </h2>
                <UnorderedList>
                  <li>{t("about.version-0.7.0")}</li>
                  <li>{t("about.version-0.6.1")}</li>
                  <li>{t("about.version-0.6.0")}</li>
                  <li>{t("about.version-0.5.0")}</li>
                  <li>{t("about.version-0.4.1")}</li>
                  <li>{t("about.version-0.4.0")}</li>
                  <li>{t("about.version-0.3.0")}</li>
                  <li>{t("about.version-0.2.4")}</li>
                  <li>{t("about.version-0.2.3")}</li>
                  <li>{t("about.version-0.2.2")}</li>
                  <li>{t("about.version-0.2.1")}</li>
                  <li>{t("about.version-0.1.0")}</li>
                </UnorderedList>
              </div>
            </div>

            <div className="tw-mb-8">
              <h2 className="tw-text-lg">{t("about.project-members")}</h2>
              <UnorderedList>
                <li>{t("about.ntsdk")}</li>
                <li>{t("about.mellon")}</li>
                <li>
                  {t("about.myshlaevski")}
                  &nbsp;
                  <ExternalLink href="https://vk.com/dreamyfish">
                    {t("about.contributor-vk-group")}
                  </ExternalLink>
                </li>
              </UnorderedList>
            </div>

            <div>
              <h2 className="tw-text-lg">{t("about.legal-information")}</h2>
              <UnorderedList>
                <li>{t("about.paradox-copyright")}</li>
                <li>{t("about.studio-101-copyright")}</li>
              </UnorderedList>
            </div>
          </Card.Body>
        </Card>
      </main>
    </DocumentTitle>
  );
}
