import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useFormik } from "formik";

const Contact = () => {
  const {handleChange, handleSubmit} = useFormik({
    initialValues: {
        name: "",
        email: "",
        message: ""
    },
    onSubmit: (data) => {
        console.log("submit");
    }
  })

  return (
    <Box component="section">
      <Grid container spacing={3} component="section">
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Formulario de contacto" />
          <Box component="form" onSubmit={handleSubmit}>
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
              sx={{ textTransform: "none", borderRadius: "50px" }}
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
