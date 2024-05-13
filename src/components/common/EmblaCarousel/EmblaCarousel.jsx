import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoHeight()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

    useEffect(() => {
      if (!emblaApi || isHovered) return;
      const timer = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0); // Vuelve al primer slide si ya no puede avanzar
        }
      }, 4000); // Cambia cada 4 segundos
      return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, [emblaApi, isHovered]);

  return (
    <div
      className="embla"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img" src={slide} alt="Imagen" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
