import React from "react";
import i18n from "i18next";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { CURRENT_VERSION } from "./constants";

export const render = (url: string, lang: string) => {
  i18n.changeLanguage(lang);
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
};

export { CURRENT_VERSION };
