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
import resumeData from "../../utils/resumeData";
import ButtonIcon from "../common/ButtonIcon";
import EmailIcon from '@mui/icons-material/Email';

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

        {/* ------------------XS------------------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", sm:"none", md: "none" }, justifyContent: "space-between" }}>
          <Box>
            <Link to="/">
              <IconButton
                aria-label="Inicio"
                size="large"
                sx={{ backgroundColor: "primary.main" }}
              >
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>
          <Box>
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
        </Box>

        {/* ------------------SM------------------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
          <Link className="clear-link" to="/">
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "text.primary" }}
            >
              Inicio
            </Button>
          </Link>
          <Link className="clear-link" to="/resume">
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "text.primary" }}
            >
              Historial
            </Button>
          </Link>
          <Link className="clear-link" to="/portfolio">
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "text.primary" }}
            >
              Portafolio
            </Button>
          </Link>
          <Link className="clear-link" to="/contact">
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "text.primary" }}
            >
              Contacto
            </Button>
          </Link>
        </Box>

        {/* ------------------MD------------------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm:"none", md: "flex" }, justifyContent:"end" }}>
          <Link to={resumeData.socials.linkedin.url} target="_blank">
            <IconButton aria-label="LinkedIn">
              <resumeData.socials.linkedin.icon />
            </IconButton>
          </Link>
          <Link to={resumeData.socials.github.url} target="_blank">
            <IconButton aria-label="GitHub">
              <resumeData.socials.github.icon fontSize="small" />
            </IconButton>
          </Link>
          <ButtonIcon
            text="Contrátame"
            icon={<EmailIcon />}
            link={`mailto:${resumeData.email}?subject=Interesado/a en contratarte`}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
