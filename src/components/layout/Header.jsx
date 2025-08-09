import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, textDecoration: "none" }}
            component={Link}
            to='/'
            color='primary'
          >
            React Food
          </Typography>
          <Button component={Link} to='/about'>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
