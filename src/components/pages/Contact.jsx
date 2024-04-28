import { Box, Grid } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

const Contact = () => {
  return (
    <Box component="section">
      <Grid container spacing={3} component="section">
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Formulario de contacto" />

        </Grid>
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Información de contacto" />
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
