import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 2.5,
      }}
      component='footer'
    >
      <Container maxWidth='sm'>
        <Typography variant='body2' color='secondary' align='center'>
          {"Just a footer | "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
