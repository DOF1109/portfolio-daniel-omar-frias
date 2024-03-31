import { Box, Button, Typography } from "@mui/material";
import ProfilePhoto from "../../assets/images/daniel-omar-frias-foto.jpg";
import CustomTimeline from "../common/CustomTimeline";
import PersonIcon from "@mui/icons-material/Person";
import resumeData from "../../utils/resumeData";

const Profile = () => {
  return (
    <Box
      component="aside"
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
    >
      <Box p={3}>
        <Typography component="h1" variant="h6" fontWeight="bold">
          {resumeData.name}
        </Typography>
        <Typography component="h2" variant="body1">
          {resumeData.profession}
        </Typography>
      </Box>

      <Box my={3} display="flex" justifyContent="center">
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

      <Box>
        <CustomTimeline icon={<PersonIcon />} />
        <Button variant="contained">My button</Button>
      </Box>
    </Box>
  );
};

export default Profile;
