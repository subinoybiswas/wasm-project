import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoWasmProvider } from "../LoadWasm/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoWasmProvider>
      <App />
    </GoWasmProvider>
  </React.StrictMode>
);
