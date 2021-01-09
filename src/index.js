import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import locales from './locales'

ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={locales.zh} >
    <App importantDate={new Date(1459913574887)} />
  </IntlProvider>,
  document.getElementById("root")
);
