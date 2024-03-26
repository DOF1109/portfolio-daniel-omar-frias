import { Box, Typography } from "@mui/material";
import "../../../styles/variables.css";
import "./Profile.css";

const Profile = () => {
  return (
    <Box bgcolor="secondary.main" className="container-shadow">
      <div className="profile__name">
        <Typography variant="h5" component="h1" fontWeight="bold">
          DANIEL OMAR FRIAS
        </Typography>
        <Typography variant="body1" component="h2" className="title">
          Full Stack Web Developer
        </Typography>
      </div>

      <figure className="profile__img">
        <img
          src="../../../assets/images/daniel-omar-frias-foto.jpg"
          alt="Picture Daniel Omar Frias"
        />
      </figure>

      <div className="profile__information">
        Insert Timeline
        <br />
        <button>My button</button>
      </div>
    </Box>
  );
};

export default Profile;
