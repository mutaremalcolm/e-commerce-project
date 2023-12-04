import React, { Fragment} from "react";
import { useNavigate } from 'react-router-dom';

import { EmblaCarousel } from "../carousel/carousel.component";

// import { ReactComponent as RecycleLogo } from '../../assets/recycle.svg'
// import { ReactComponent as UkraineLogo } from '../../assets/ukraine.svg'
// import { ReactComponent as EarthLogo } from '../../assets/earth.svg'


import { 
    FrontSplashContainer, 
    SmallHeading, 
    StyledParagraph,
    HeadingContainer, 
    HeadingContainer2,
    BigHeadingContainer, 
    //ButtonLogosContainer,
    //LogoStyling,
    ButtonContainer,
    SloganContainer,
    SaleBanner,
    SaleHeading,
} from './front-splash.component.styles'

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
                 All your fashion needs in one place!! 
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
                <SmallHeading>Express Your Fashion Sense</SmallHeading>
                
                <StyledParagraph>
                    We appreciate that how you dress is an extension of uniqueness. Our goal is to help you express your individuality, dress how you feel inside. 
                </StyledParagraph>
                    
            </HeadingContainer>

            <BigHeadingContainer>
                
                <SmallHeading>
                    Discover the Difference:
                </SmallHeading>
                
                <StyledParagraph>
                    We're more than just stylish apparel. We're proud to be eco-friendly, supporting recycling efforts and giving back to important causes. 
                </StyledParagraph>
                <br/>

                <StyledParagraph>
                    Join us in making a positive impact on the planet while looking and feeling your best. Together, we can make a difference.
                </StyledParagraph>

            </BigHeadingContainer>

        </FrontSplashContainer>
    </Fragment>
  );
};

export default FrontSplash;