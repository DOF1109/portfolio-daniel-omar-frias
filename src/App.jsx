import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import darkTheme from "./styles/themeConfig";
import Profile from "./components/layout/Profile";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Grid
          container
          alignContent="center"
          minHeight="100vh"
          py={3}
          spacing={3}
        >
          <Grid item xs={12} md={4} lg={3}>
            <Profile />
          </Grid>

          <Grid item xs>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
