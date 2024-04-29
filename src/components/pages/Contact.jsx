import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre debe tener como maxímo 50 caracteres")
        .required("Complete este campo"),
      email: Yup.string()
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un email válido")
        .required("Complete este campo"),
      message: Yup.string()
        .trim()
        .min(4, "El mensaje debe tener al menos 4 caracteres")
        .required("Complete este campo"),
    }),
    validateOnChange: false,
  });

  return (
    <Box component="section">
      <Grid container spacing={4} component="section">
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Formulario de contacto" />
          <Grid
            container
            spacing={3}
            component="form"
            onSubmit={handleSubmit}
          >
            <Grid item xs={12} lg={10} mt={2}>
              <TextField
                name="name"
                label="Nombre"
                variant="outlined"
                onChange={handleChange}
                error={errors.name ? true : false}
                helperText={errors.name}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={10}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={10}>
              <TextField
                name="message"
                label="Mensaje"
                variant="outlined"
                onChange={handleChange}
                error={errors.message ? true : false}
                helperText={errors.message}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={10} display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none", borderRadius: "50px" }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SectionTitle text="Información de contacto" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
