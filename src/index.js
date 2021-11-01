import "./index.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppHeader from "./components/AppHeader"; // importovan
import AppFooter from "./components/AppFooter"; // iportovan

import App from "./App";
import reducers from "./reducers";

// AppHeader i AppFooter
render(
  <Provider store={createStore(reducers)}>
    <AppHeader />
    <App />
    <AppFooter />
  </Provider>,
  document.getElementById("root")
);
