import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./i18n";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);