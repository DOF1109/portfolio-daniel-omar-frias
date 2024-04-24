import { Box, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={2}
    >
      <Typography variant="body1">{resumeData.name}</Typography>
      <Typography variant="caption" color="text.secondary">
        Desarrollado por
        <Link className="clear-link" to="/">
          <Typography variant="caption" color="primary"> {resumeData.name}</Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
