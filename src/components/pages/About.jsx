import { Box, Typography } from "@mui/material"
import SectionTitle from "../common/SectionTitle"
import resumeData from "../../utils/resumeData"

const About = () => {
  return (
    <Box component="section">
        <SectionTitle text="Sobre mí" />
        <Typography variant="body2" lineHeight="1.8" whiteSpace="pre-wrap">
            {resumeData.about}
        </Typography>
    </Box>
  )
}

export default About