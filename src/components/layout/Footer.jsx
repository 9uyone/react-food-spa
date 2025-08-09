import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2.5,
      }}
      component='footer'
    >
      <Container maxWidth='sm'>
        <Typography variant='body2' color='text.secondary' align='center'>
          {"Copyright © "}
          <Link color='inherit' href='https://mui.com/'>
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
