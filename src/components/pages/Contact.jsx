import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const { handleChange, handleBlur, handleSubmit, errors } = useFormik({
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
        .min(3, "El nombre debe tener al menos 3 caracteres, por favor")
        .max(50, "El nombre debe tener como maxímo 50 caracteres, por favor")
        .required("Complete este campo, por favor"),
      email: Yup.string()
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Ingrese un email válido, por favor"
        )
        .required("Complete este campo, por favor"),
      message: Yup.string()
        .min(4, "El mensaje debe tener al menos 4 caracteres, por favor")
        .required("Complete este campo, por favor"),
    }),
    validateOnChange: false,
    validateOnBlur: true,
  });

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
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              name="message"
              label="Mensaje"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message ? true : false}
              helperText={errors.message}
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
