import { createRoot } from "react-dom/client";
import App from './App';
import './styles/normalize.scss';
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles/normalize.scss";
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.querySelector("#root");

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);