import { Container, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import Profile from "./components/layout/Profile/Profile";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Resume from "./components/pages/Resume/Resume";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            <Profile />
          </Grid>

          <Grid item xs style={{ background: "tomato" }}>
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
