import { Container, Grid } from "@mui/material";
import "./App.css";
import Profile from "./components/layout/Profile/Profile";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Resume from "./components/pages/Resume/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid xs item style={{ background: "tomato" }}>
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
  );
}

export default App;
