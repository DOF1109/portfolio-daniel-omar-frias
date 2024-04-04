import { Box, Typography } from "@mui/material"
import resumeData from "../../utils/resumeData"

const Footer = () => {
  return (
    <Box 
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={5}
      display="flex"
      justifyContent="space-between"
      px={3}
      py={2}
      >
      <Typography variant="body2">{resumeData.name}</Typography>
      <Typography variant="body2">© 2024</Typography>
    </Box>
  )
}

export default Footer