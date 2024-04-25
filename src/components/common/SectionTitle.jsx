import { Box, Typography } from "@mui/material";

const SectionTitle = ({ text }) => {
  return (
    <Box position="relative" display="inline-block" mb={2}>
      <Typography variant="h6" component="h2">
        {text}
      </Typography>
      <span className="underline"></span>
    </Box>
  );
};

export default SectionTitle;
