import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "./charSheets/root/services/store";
import { ErrorBoundry } from "./uiLib/ErrorBoundry";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <Provider>
//     <React.StrictMode>
//       <ErrorBoundry>
//         <App />
//       </ErrorBoundry>
//     </React.StrictMode>
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <Provider>
      <React.StrictMode>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </React.StrictMode>
    </Provider>
  );
} else {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <Provider>
      <React.StrictMode>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </React.StrictMode>
    </Provider>
  );
}
