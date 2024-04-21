import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoWasmLoader } from "../LoadWasm/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoWasmLoader>
      <App />
    </GoWasmLoader>
  </React.StrictMode>
);
