import { Box, Typography } from "@mui/material";
import ProfilePhoto from "../../assets/images/daniel-omar-frias-foto.jpg";
import CustomTimeline from "../common/CustomTimeline";
import PersonIcon from "@mui/icons-material/Person";
import resumeData from "../../utils/resumeData";
import ProfileTimelineItem from "../common/ProfileTimelineItem";
import ButtonIcon from "../common/ButtonIcon";
import DownloadIcon from "@mui/icons-material/Download";
import cvDanielOmarFrias from "../../assets/pdf/CV - Daniel Omar Frias.pdf";

const Profile = () => {
  const downloadCV = () => {
    console.log("Descargar CV");
  };

  return (
    <Box
      component="aside"
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
      p={3}
    >
      <Box>
        <Typography component="h1" variant="h6" fontWeight="bold">
          {resumeData.name}
        </Typography>
        <Typography component="h2" variant="body1">
          {resumeData.profession}
        </Typography>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Box
          component="img"
          src={ProfilePhoto}
          alt={resumeData.name + "'s photo"}
          sx={{
            border: 3,
            borderColor: "primary.main",
            borderRadius: "50%",
            maxWidth: { xs: 350, md: 250 },
            width: 200,
          }}
        />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <CustomTimeline icon={<PersonIcon />}>
          <ProfileTimelineItem
            title="Email"
            text={resumeData.email}
            url={`mailto:${resumeData.email}`}
            hasConnector={true}
          />
          <ProfileTimelineItem
            title="Dirección"
            text={resumeData.address}
            hasConnector={true}
          />
          <ProfileTimelineItem
            title="LinkedIn"
            text={resumeData.socials.linkedin.text}
            url={resumeData.socials.linkedin.url}
            hasConnector={true}
          />
          <ProfileTimelineItem
            title="GitHub"
            text={resumeData.socials.github.text}
            url={resumeData.socials.github.url}
            hasConnector={false}
          />
        </CustomTimeline>

        <ButtonIcon
          text="Descargar CV"
          icon={<DownloadIcon />}
          link={cvDanielOmarFrias}
        />
      </Box>
    </Box>
  );
};

export default Profile;
