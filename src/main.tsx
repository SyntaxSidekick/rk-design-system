
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  // Import the design system package so demo uses DS via package
  import "@syntaxsidekick/riadkilani-design-system";

  createRoot(document.getElementById("root")!).render(<App />);
  