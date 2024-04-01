import { Button } from "@mui/material";

const ButtonIcon = ({ text, icon, handleClick }) => {
  return (
    <Button
      variant="contained"
      endIcon={icon && icon}
      sx={{
        borderRadius: "50px",
        textTransform: "none",
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonIcon;
