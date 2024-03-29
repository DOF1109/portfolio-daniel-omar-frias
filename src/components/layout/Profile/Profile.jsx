import { Box, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box bgcolor="background.paper">
      <Box>
        <Typography variant="h5" component="h1" fontWeight="bold">
          DANIEL OMAR FRIAS
        </Typography>
        <Typography variant="body1" component="h2">
          Full Stack Web Developer
        </Typography>
      </Box>

      {/* <figure className="profile__img">
        <img
          src="../../../assets/images/daniel-omar-frias-foto.jpg"
          alt="Picture Daniel Omar Frias"
        />
      </figure>

      <div className="profile__information">
        Insert Timeline
        <br />
        <button>My button</button>
      </div> */}
    </Box>
  );
};

export default Profile;
