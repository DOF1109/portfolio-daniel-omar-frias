import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#31d0be",
    },
    secondary: {
      main: "#327ed1",
    },
    background: {
      default: "#0f172a",
      paper: "#1d2537",
    },
    text: {
      primary: "#f0fdfa",
    },
  },
});

export default darkTheme;
