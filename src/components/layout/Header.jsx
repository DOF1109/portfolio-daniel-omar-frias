import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import resumeData from "../../utils/resumeData";
import ButtonIcon from "../common/ButtonIcon";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ borderRadius: 2 }}>
      <Toolbar>
        {/* ------------------ XS ------------------ */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Box alignContent="center">
            <Link to="/">
              <IconButton
                aria-label="Inicio"
                size="medium"
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="clear-link" to="/resume">
                  Trayectoria
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="clear-link" to="/portfolio">
                  Portafolio
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="clear-link" to="/contact">
                  Contacto
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* ------------------ SM ------------------ */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link className="clear-link" to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: location.pathname === "/" ? "primary" : "text.primary",
                }}
              >
                Sobre mí
              </Button>
            </Link>
            <Link className="clear-link" to="/resume">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color:
                    location.pathname === "/resume"
                      ? "primary"
                      : "text.primary",
                }}
              >
                Trayectoria
              </Button>
            </Link>
            <Link className="clear-link" to="/portfolio">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color:
                    location.pathname === "/portfolio"
                      ? "primary"
                      : "text.primary",
                }}
              >
                Portafolio
              </Button>
            </Link>
            <Link className="clear-link" to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color:
                    location.pathname === "/contact"
                      ? "primary"
                      : "text.primary",
                }}
              >
                Contacto
              </Button>
            </Link>
          </Box>
        </Box>

        {((windowWidth > 720 && windowWidth < 900) || windowWidth > 1060) && (
          <>
            <Link to={resumeData.socials.linkedin.url} target="_blank">
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <resumeData.socials.linkedin.icon />
              </IconButton>
            </Link>
            <Link to={resumeData.socials.github.url} target="_blank">
              <IconButton
                aria-label="GitHub"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <resumeData.socials.github.icon />
              </IconButton>
            </Link>
          </>
        )}
        {((windowWidth >= 650 && windowWidth < 900) || windowWidth > 950) && (
          <ButtonIcon
            text="Contrátame"
            icon={<EmailIcon />}
            link={`mailto:${resumeData.email}?subject=Interesado/a en contratarte`}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
