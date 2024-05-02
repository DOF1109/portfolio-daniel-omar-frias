import { Button, Link } from "@mui/material";

const ButtonIcon = ({ text, icon, link }) => {
  return (
    <Button
      variant="contained"
      endIcon={icon && icon}
      sx={{
        borderRadius: "50px",
        textTransform: "none",
        ml: 1
      }}
    >
      <Link href={link} underline="none" color="inherit" target="_blank">
        {text}
      </Link>
    </Button>
  );
};

export default ButtonIcon;
