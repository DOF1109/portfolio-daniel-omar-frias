import { Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile__name">
        <Typography className="name">Daniel Omar Frias</Typography>
        <Typography className="title">Full Stack Web Developer</Typography>
      </div>
      <figure className="profile__img">
        <img src="" alt="" />
      </figure>
      <div className="profile__information">
        Insert Timeline
        <br />
        <button>My button</button>
      </div>
    </div>
  );
};

export default Profile;
