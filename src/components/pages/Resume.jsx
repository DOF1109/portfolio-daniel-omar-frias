import { Box, Grid } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import SectionTitle from "../common/SectionTitle";
import CustomTimeline from "../common/CustomTimeline";
import resumeData from "../../utils/resumeData";
import HistoryTimelineItem from "../common/HistoryTimelineItem";
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Omar Frias - Trayectoria</title>
        <meta 
          name="description" 
          content="Experiencia y formación de Daniel Omar Frias, Full Stack Web Developer con una sólida formación académica y proyectos alineados con las tecnologías clave del sector." 
        />
      </Helmet>
      <Box component="section">
        <SectionTitle text="Trayectoria" />
        <Grid container>
          <Grid item xs={12} md={6}>
            <CustomTimeline title="Experiencia" icon={<EngineeringIcon />}>
              {resumeData.experiences.map((experience, index, array) => {
                return (
                  <HistoryTimelineItem
                    key={experience.title}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    hasConnector={ index !== array.length-1 }
                  />
                );
              })}
            </CustomTimeline>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTimeline title="Educación" icon={<SchoolIcon />}>
            {resumeData.education.map((edu, index, array) => {
                return (
                  <HistoryTimelineItem
                    key={edu.title}
                    title={edu.title}
                    date={edu.date}
                    description={edu.description}
                    hasConnector={ index !== array.length-1 }
                  />
                );
              })}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Box>
  </>
  );
};

export default Resume;
