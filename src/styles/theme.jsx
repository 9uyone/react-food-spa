import { Transform } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#121212",
      paper: "#181818",
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
