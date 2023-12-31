import styled from "styled-components";



export const Embla = styled.div `
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 34rem;
  padding: 1px;
  padding-top: 4px;

  @media (max-width: 500px) {
    --slide-height: 20rem;
  }
  `;

export const EmblaViewPort = styled.div `
    overflow: hidden;
`;

export const EmblaContainer = styled.div `
  
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  flex-direction: row;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);

  cursor: grab;
`;

export const EmblaSlide = styled.div `
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
`;

export const EmblaSlideImage = styled.img `
  position: relative;
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const EmblaSlideOverlay = styled.div `
  position: absolute;
  top: 0%;
  left: 30%;

  background-color: #89cff0;

  font-family: Courier, monospace;

  color: #FFFFFF;
  font-weight: 900;
  font-size: 230%;

  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 150%;
    left: 5%;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    font-size: 120%;
    left: 5%;
  }

`;

export const EmblaSlideOverlay2 = styled.div `
  position: absolute;
  top: 20%;
  left: 3%;

  
  background-color: none;

  font-family: 'Audiowide', Courier, monospace;

  color: #c9cec5;
  font-weight: 900;
  font-size: 180%;

  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 115%;
    top: 17%;
    left: 5%;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    font-size: 100%;
    top: 15%;
    left: 5%;
  }


`;