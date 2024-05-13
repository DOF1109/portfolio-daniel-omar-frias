import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container, Fab } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from "react";

const Layout = ({headerRef}) => {
  const [isVisible, setIsVisible] = useState(false);
  

  const checkScroll = () => {
    if (!isVisible && window.scrollY > 400) {
      setIsVisible(true);
    } else if (isVisible && window.scrollY <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isVisible]);

  return (
    <>
      <Header ref={headerRef} />
      <Box
        component="main"
        bgcolor="background.paper"
        borderRadius={2}
        boxShadow={5}
        p={4}
        my={3}
      >
        <Outlet />
      </Box>
      <Container fixed>
        {isVisible && (
          <Fab
            size="small"
            color="primary"
            aria-label="Arriba"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              position: "fixed",
              bottom: "1.5rem",
              right: { xs: "1rem", sm: "1.5rem", md: "2rem", xl: "13%"
               },
            }}
          >
            <ExpandLessIcon />
          </Fab>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
