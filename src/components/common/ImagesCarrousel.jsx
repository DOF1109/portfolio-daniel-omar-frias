import { forwardRef, useRef, useEffect } from "react";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { register } from "swiper/element/bundle";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

register();

const ImagesCarrousel = ({ openCarrousel, onClose, title, images }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (swiperElRef.current) {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener("swiperprogress", (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener("swiperslidechange", (e) => {
        console.log("slide changed");
      });
    }
  }, []);
  

  return (
    <Dialog
      fullScreen
      open={openCarrousel}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </Dialog>
  );
};

export default ImagesCarrousel;
