import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SectionTitle from "../common/SectionTitle";
import resumeData from "../../utils/resumeData";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImagesCarrousel from "../common/ImagesCarrousel";
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [openCarrousel, setOpenCarrousel] = useState(false);

  const handleOpenDialog = (project) => {
    setCurrentProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleOpenCarrousel = () => {
    setOpenCarrousel(true);
  };

  const handleCloseCarrousel = () => {
    setOpenCarrousel(false);
  };

  return (
    <>
      <Helmet>
        <title>Daniel Omar Frias - Portafolio</title>
        <meta 
          name="description" 
          content="Explora el portafolio de proyectos de Daniel Omar Frias, Full Stack Web Developer. Descubre las soluciones que he desarrollado, cada una con su propio conjunto de desafíos y logros." 
        />
      </Helmet>
      <Box component="section">
        <SectionTitle text="Portafolio" />
        <Grid container spacing={3} mt={1} justifyContent="space-evenly">
          {resumeData.projects.map((project) => {
            return (
              <Grid item key={project.title} xs={12} sm={6} lg={4}>
                <Grow in timeout={1000}>
                  <Card
                    sx={{ height: "100%" }}
                    onClick={() => handleOpenDialog(project)}
                  >
                    <CardActionArea
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.principalImage}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            );
          })}
        </Grid>

        {currentProject && (
          <Dialog
          open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogTitle id="alert-dialog-title">
              {currentProject.title}
            </DialogTitle>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              position="relative"
            >
              <Box
                component="img"
                src={currentProject.principalImage}
                alt={currentProject.title}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <button className="btn-see-more" onClick={handleOpenCarrousel}>
                Ver más
              </button>
            </Box>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {currentProject.description}
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
              {currentProject.links.map((link) => {
                return (
                  <Link key={link.socialRed} to={link.url} target="_blank">
                    <IconButton
                      aria-label={link.socialRed}
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      <link.icon />
                    </IconButton>
                  </Link>
                );
              })}
            </DialogActions>
          </Dialog>
        )}
        {openCarrousel && (
          <ImagesCarrousel
            openCarrousel={openCarrousel}
            onClose={handleCloseCarrousel}
            title={currentProject.title}
            images={currentProject.arrayImages}
          />
          )}
      </Box>
    </>
  );
};

export default Portfolio;
