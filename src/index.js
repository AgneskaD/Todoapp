import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import App from "./App";

import "./styles/normalize.scss";
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
</React.StrictMode>
);