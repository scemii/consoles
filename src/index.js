import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";


import App from "./Component/App";

import reducers from "./reducers/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  rootElement
);
