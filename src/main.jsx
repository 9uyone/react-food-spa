import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "./styles/theme.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router basename='/react-food-spa/'>
      <App />
    </Router>
  </ThemeProvider>
);
