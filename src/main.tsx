import React from "react";
import App from "@/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
