import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import darkTheme from "./styles/themeConfig";
import Profile from "./components/layout/Profile";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { useRef } from "react";
import NotFound from "./components/pages/NotFound";

function App() {
  const headerRef = useRef(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Grid
          container
          justifyContent="center"
          minHeight="100vh"
          py={3}
          spacing={3}
        >
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <Profile headerRef={headerRef} />
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={9}>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout headerRef={headerRef} />}>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
