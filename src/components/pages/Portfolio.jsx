import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Typography,
} from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  return (
    <Box component="section">
      <SectionTitle text="Portafolio" />
      <Grid container spacing={2}>
        {resumeData.projects.map((project) => {
          return (
            <Grid item key={project.title} xs={12} md={6}>
              <Grow in timeout={1000}>
                <Card sx={{ maxWidth: 345 }}>
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
    </Box>
  );
};

export default Portfolio;
