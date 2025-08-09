import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, Container } from "@mui/material";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        component='main'
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/meal/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
