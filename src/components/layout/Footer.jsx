import { Box, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    navigate("/");
  };

  return (
    <Box
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={3}
      py={2}
    >
      <Typography variant="caption" color="text.secondary">
        Desarrollado por
        <Link 
          className="clear-link" 
          to="/"
          onClick={handleClick}
        >
          <Typography variant="caption" color="primary">
            {" "}
            {resumeData.name}
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
