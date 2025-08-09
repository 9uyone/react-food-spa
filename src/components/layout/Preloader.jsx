import { Box, CircularProgress } from "@mui/material";

function Preloader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export { Preloader };
