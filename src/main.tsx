import "./core/ui/_override.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/app/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
