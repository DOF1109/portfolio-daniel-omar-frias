import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

const Contact = () => {
  return (
    <Box component="section">
      <Grid container spacing={3} component="section">
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Formulario de contacto" />
          <Box component="form" onSubmit={() => {}}>
            <TextField
              name="name"
              label="Nombre"
              variant="outlined"
              onChange={() => {}}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={() => {}}
            />
            <TextField
              name="message"
              label="Mensaje"
              variant="outlined"
              onChange={() => {}}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: "50px" }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Información de contacto" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
