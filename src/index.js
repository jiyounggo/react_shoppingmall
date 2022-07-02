import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./reducer/store.js";
import user from "./reducer/user.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} user={user}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
