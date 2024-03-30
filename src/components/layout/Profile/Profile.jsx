import { Box, Button, Typography } from "@mui/material";
import ProfilePhoto from "../../../assets/images/daniel-omar-frias-foto.jpg";

const Profile = () => {
  return (
    <Box
      component="aside"
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
    >
      <Box p={2}>
        <Typography component="h1" variant="h6" fontWeight="bold">
          DANIEL OMAR FRIAS
        </Typography>
        <Typography component="h2" variant="body1">
          Full Stack Web Developer
        </Typography>
      </Box>

      <Box my={3} display="flex" justifyContent="center">
        <Box
          component="img"
          src={ProfilePhoto}
          alt="Daniel Omar Frias's photo"
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
        Insert Timeline
        <Button variant="contained">My button</Button>
      </Box>
    </Box>
  );
};

export default Profile;
