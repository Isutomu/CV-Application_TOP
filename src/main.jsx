import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles/reset.css";
import "../styles/common.css";
import "../styles/section.css";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV generator</h1>
    <App />
  </StrictMode>
);
