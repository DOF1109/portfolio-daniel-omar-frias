import { forwardRef } from "react";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import "../../styles/embla.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OPTIONS = { loop: true }

const ImagesCarrousel = ({ openCarrousel, onClose, title, images }) => {
  return (
    <Dialog
      fullScreen
      open={openCarrousel}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          <IconButton
            edge="start"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <EmblaCarousel slides={images} options={OPTIONS} />
    </Dialog>
  );
};

export default ImagesCarrousel;
