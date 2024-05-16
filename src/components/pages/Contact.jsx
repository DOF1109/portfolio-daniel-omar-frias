import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (data) => {
      sendEmail();
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

  let templateParams = {
    user_name: values.name,
    user_email: values.email,
    message: values.message,
  };

  const sendEmail = () => {
    const promise = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(
      promise,
      {
        pending: "Enviando...",
        success: "¡Enviado! Me contactaré contigo, gracias",
        error: "No enviado, intente nuevamente por favor",
      },
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Daniel Omar Frias - Contacto</title>
        <meta 
          name="description" 
          content="Ponte en contacto con Daniel Omar Frias, Full Stack Web Developer. Si tienes alguna pregunta, sugerencia o propuesta, no dudes en enviarme un mensaje a través de este simple formulario." 
        />
      </Helmet>
      <Box component="section">
        <SectionTitle text="Formulario de contacto" />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} sm={9} lg={8} mt={3}>
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
          <Grid item xs={12} sm={9} lg={8}>
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
          <Grid item xs={12} sm={9} lg={8}>
            <TextField
              name="message"
              label="Mensaje"
              variant="outlined"
              onChange={handleChange}
              error={errors.message ? true : false}
              helperText={errors.message}
              multiline
              rows={10}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9} lg={8} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ textTransform: "none", borderRadius: "50px" }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition="Flip"
        />
      </Box>
    </>
  );
};

export default Contact;
