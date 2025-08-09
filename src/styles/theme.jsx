import { Transform } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#19d2b9ff",
      light: "#4cffdf",
      dark: "#00a085",
    },
    secondary: {
      main: "#ff8a65", // Hot pink
    },
    background: {
      default: "#0f1419", // GitHub dark
      paper: "#161b22",
    },
    success: {
      main: "#4caf50", // Для позитивних дій
    },
    warning: {
      main: "#ff9800", // Для попереджень
    },
  },
  shape: {
    borderRadius: 2 * 6,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 1.5 * 6,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          //textTransform: "none",
        },
      },
    },
  },
});
