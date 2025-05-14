import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TelaDashboard } from "./screens/TelaDashboard";
import '../tailwind.css'

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <TelaDashboard />
  </StrictMode>,
);
