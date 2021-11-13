import React from "react";
import ReactDOM from "react-dom";
import Store from "./store/index";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
