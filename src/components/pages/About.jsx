import { Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import resumeData from "../../utils/resumeData";
import { TimelineDot } from "@mui/lab";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Omar Frias - Sobre mí</title>
        <meta 
          name="description" 
          content="Portafolio de Daniel Omar Frias, Full Stack Web Developer. Conoce mis habilidades, proyectos y las soluciones innovadoras que he creado." 
        />
      </Helmet>
      <Box component="section" mb={5}>
        <SectionTitle text="Sobre mí" />
        <Typography
          variant="body2"
          lineHeight="1.8"
          whiteSpace="pre-wrap"
          mt={2}
        >
          {resumeData.about}
        </Typography>
      </Box>
      <Grid
        container
        component="section"
        spacing={3}
        justifyContent="space-evenly"
      >
        <Grid item xs={12}>
          <SectionTitle text="Habilidades" />
        </Grid>
        {resumeData.skills.map((skill) => {
          return (
            <Grid item key={skill.title} xs={12} sm={6} md={5} lg={4}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="h6" pb={1}>
                  {skill.title}
                </Typography>
                <List disablePadding>
                  {skill.description.map((element) => {
                    return (
                      <ListItem key={element} disablePadding sx={{my: 1}}>
                        <TimelineDot
                          variant="outlined"
                          color="primary"
                          sx={{ my: 1, mr: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {element}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default About;
