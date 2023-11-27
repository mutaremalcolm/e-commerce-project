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
                50% Off Sale Coming Soon!!!  
            </SaleHeading>
        

        </SaleBanner>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        
        <FrontSplashContainer>

            <HeadingContainer>
                <SmallHeading>Express Your Fashion Sense</SmallHeading>
                
                <StyledParagraph>
                    We appreciate that how you dress is an extension of uniqueness. Our goal is to help you express your individuality, dress how you feel inside. 
                </StyledParagraph>
                
                <StyledParagraph>
                 Our team of desingers and stylists work hard to ensure we are ahead of fashion world every season.
                </StyledParagraph>

            </HeadingContainer>
            

            <BigHeadingContainer>
                
                <SmallHeading>
                    Be a trend-setter:
                </SmallHeading>
                
                <StyledParagraph>
                    We're more than just stylish apparel. We're proud to be eco-friendly, supporting recycling efforts and giving back to important causes. 
                </StyledParagraph>
                <br/>

                <StyledParagraph>
                    Join us in making a positive impact on the planet while looking and feeling your best. Together, we can make a difference.
                </StyledParagraph>

                
                {/* <ButtonLogosContainer>

                    <LogoStyling onClick={onNavigateHandler}>
                        <RecycleLogo/>
                    </LogoStyling>


                    <LogoStyling onClick={onNavigateHandler}>
                        <EarthLogo/>
                    </LogoStyling>


                    <LogoStyling onClick={onNavigateHandler}>
                        <UkraineLogo/>
                    </LogoStyling>

                </ButtonLogosContainer> */}


                {/* <ButtonContainer>
                    <Button onClick={onNavigateHandler}>
                        Learn More
                    </Button>
                </ButtonContainer> */}

            </BigHeadingContainer>


            <HeadingContainer> 
                <SmallHeading>Join the Movement </SmallHeading>
                <StyledParagraph>
                    A community of individuals who strive for greatness. Together, we support and encourage each other to go beyond our comfort zones and unlock our true potential. 
                </StyledParagraph>
                <StyledParagraph>
                     Checkout our fall collection
                </StyledParagraph>

            </HeadingContainer>


            <SloganContainer> 
                Lights, Camera, Fashion <br/> A smile is the best accessory.
            </SloganContainer>


        </FrontSplashContainer>
    </Fragment>
  );
};

export default FrontSplash;