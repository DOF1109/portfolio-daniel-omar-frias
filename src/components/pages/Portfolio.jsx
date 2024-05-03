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
import SectionTitle from "../common/SectionTitle";
import resumeData from "../../utils/resumeData";
import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpenDialog = (project) => {
    setCurrentProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <Box component="section">
      <SectionTitle text="Portafolio" />
      <Grid container spacing={2}>
        {resumeData.projects.map((project) => {
          return (
            <Grid item key={project.title} xs={12} md={6}>
              <Grow in timeout={1000}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleOpenDialog(project)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
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
        >
          <DialogTitle id="alert-dialog-title">
            {currentProject.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {currentProject.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
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
    </Box>
  );
};

export default Portfolio;
