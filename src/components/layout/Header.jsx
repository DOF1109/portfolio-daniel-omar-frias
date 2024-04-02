import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const pages = ["Historial", "Portafolio", "Contacto"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ borderRadius: 2 }}>
      <Toolbar>
        <IconButton
          aria-label="Inicio"
          size="large"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Link className="clear-link" to="/">
            <HomeIcon />
          </Link>
        </IconButton>

        {/* ------------------XS------------------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* ------------------MD------------------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: "text.primary", display: "block" }}
          >
            <Link className="clear-link" to="/resume">
              Historial
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: "text.primary", display: "block" }}
          >
            <Link className="clear-link" to="/portfolio">
              Portafolio
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: "text.primary", display: "block" }}
          >
            <Link className="clear-link" to="/contact">
              Contacto
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
