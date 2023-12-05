import { ReactNode } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imagebyindex';

import { 
    Embla, 
    EmblaViewPort, 
    EmblaContainer, 
    EmblaSlide, 
    EmblaSlideOverlay,
    EmblaSlideOverlay2,
    EmblaSlideImage,
  } from './carousel.component.styles'
  
  
  export const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  
    return (
      <Embla>
        <EmblaViewPort ref={emblaRef}>
          <EmblaContainer>
            {slides.map((slide, index) => (
              <EmblaSlide key={index}>
                <EmblaSlideImage
                  src={imageByIndex(index)} 
                  alt="scrolling image"
                ></EmblaSlideImage>
  
                {/* <EmblaSlideOverlay>StreetWear Collection</EmblaSlideOverlay> */}
  
                {/*<EmblaSlideOverlay2>Winter Collection</EmblaSlideOverlay2>*/}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewPort>
      </Embla>
    );
  };