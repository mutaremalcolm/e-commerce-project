import React, { Fragment} from "react";
import { useNavigate } from 'react-router-dom';
// import hero1 from '../../assets/Hero_Section/hero1.jpg';

import { EmblaCarousel } from "../carousel/carousel.component";

// import { ReactComponent as EarthLogo } from '../../assets/recyclingsymbol.svg';

import Button from "../button/button.component";

 
import { 
    FrontSplashContainer, 
    SmallHeading, 
    StyledParagraph,
    HeadingContainer, 
    BigHeadingContainer, 
    SaleBanner,
    SaleHeading,
} from './front-splash.component.styles';
import { ButtonsContainer } from "../sign-in-form/sign-in-form.styles";

// const HeroImage = hero1;

const OPTIONS = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const FrontSplash = () => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('/about');
    

  return (
    <Fragment>

        <SaleBanner>

            <SaleHeading>
                 All your shopping in one-click! 
            </SaleHeading>
        

        </SaleBanner>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <SaleBanner>

            <SaleHeading>
                50% Off Sale Coming Soon!!!  
            </SaleHeading>
        

        </SaleBanner>
        
        <FrontSplashContainer>

            <HeadingContainer>
                <SmallHeading>Unleash Your Inner Trendsetter</SmallHeading>
                
                
                <StyledParagraph>
                Discover clothes that reflect your individuality and dress how you feel..<br/>
                We aim to keep you updated with current trends, Click and Read More...<br/>
                </StyledParagraph>
                <ButtonsContainer>
                <Button onClick={() => window.open('https://www.rebeccajacobs.style/blog', '_blank')}>Fashion Tips</Button>
                </ButtonsContainer>
                    
            </HeadingContainer>

            <BigHeadingContainer>
                
                <SmallHeading>
                    Making a Difference.
                </SmallHeading>
                
                <StyledParagraph>
                    We're more than just stylish apparel. We're proud to be eco-friendly.<br/>
                    We make an effort to source products that use recyled materials while maintaining quality standards.
                </StyledParagraph>
                {/* <EarthLogo /> */}
            </BigHeadingContainer>

        </FrontSplashContainer>
    </Fragment>
  );
};

export default FrontSplash;