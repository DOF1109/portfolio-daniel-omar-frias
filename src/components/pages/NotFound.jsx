import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Daniel Omar Frias - Página no encontrada</title>
                <meta 
                name="description" 
                content="Lo siento, la página que estás buscando no se pudo encontrar. Por favor, verifica la URL o regresa a la página principal para encontrar lo que necesitas." 
                />
                <meta name="robots" content="noindex, follow"></meta>
            </Helmet>
            <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            height="100%"
            maxHeight="800px"
            >
                <Typography component="h1" variant="h5">
                    No se encontró la página
                </Typography>
                <Typography m={2}>
                    Lo siento, pero la página que estás buscando no existe.
                </Typography>
                <Typography>
                    Puedes volver a la página principal haciendo clic <Link to="/" className="clear-link primary-text">aquí</Link>.
                </Typography>
            </Box>
        </>
    )
}

export default NotFound