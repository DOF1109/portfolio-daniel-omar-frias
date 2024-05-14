import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          height="100%"
          maxHeight="800px"
        >
            <Typography component="h2" variant="h5" mb={2}>
                No se encontró la página
            </Typography>
            <Typography variant="h6">
                Volver al <Link to="/" className="clear-link primary-text">INICIO</Link>
            </Typography>
        </Box>
    )
}

export default NotFound