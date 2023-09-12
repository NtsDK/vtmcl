import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/order
import DocumentTitle from "react-document-title";

import "./i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "./tailwind.css";

// import logo from './logo.svg';
import "./App.css";

// import { Settings } from "luxon";

import { useTranslation } from "react-i18next";

// import { defaultLang } from "./i18nResources";

// import { Header } from "./ui/Header";
import { ErrorNotification } from "./uiLib/ErrorNotification";
import { CharSheetPage } from "./ui/CharSheetPage";
import { AboutPage } from "./ui/AboutPage";
import { ControlPanel } from "./ui/ControlPanel";
import { InstructionPage } from "./ui/InstructionPage";
import { CURRENT_VERSION } from "./constants";
import { useInternalPresetProps } from "./charSheets";
import { useSettings } from "./charSheets/misc/services/storageAdapter";

function App(): JSX.Element {
  const { t } = useTranslation();
  const { settings } = useSettings();
  const { displayName } = useInternalPresetProps();

  useEffect(() => {
    document.body.style.backgroundColor = settings.backgroundColor;

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [settings]);

  return (
    <DocumentTitle
      title={t("about.defaultPageTitle", {
        type: displayName,
        version: CURRENT_VERSION,
      })}
    >
      <div className="app">
        <div className="tw-flex">
          <div
            className="tw-flex-grow-0 tw-flex-shrink-0 tw-bg-gray-200 tw-max-w-sm  print:tw-hidden"
            // style={{flexBasis: '25rem'}}
          >
            <ControlPanel />
          </div>
          <div className="tw-flex-grow-1 tw-w-full">
            <Routes>
              <Route path="/charsheet" element={<CharSheetPage />} />
              <Route path="/instruction" element={<InstructionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<CharSheetPage />} />
            </Routes>
          </div>
        </div>
        <ErrorNotification />
      </div>
    </DocumentTitle>
  );
}

export default App;
