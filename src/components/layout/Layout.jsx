import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Layout;
