import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1574ef",
    },
    secondary: {
      main: "#33ffcc",
    },
    background: {
      paper: "#272a30",
      default: "#1c1f25",
    },
    text: {
      primary: "#f0f0f0",
    },
  },
});

export default theme;
