import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
