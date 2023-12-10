import styled from 'styled-components';

/* --------------------------------------------------------
    CONTAINERS
----------------------------------------------------------*/ 

export const FrontSplashContainer = styled.div`
    margin: 10px 2px 15px;
    padding-bottom: 5px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto; 
    gap: 14px 10px; 
    grid-template-areas: 
    ". ."
    ". ."
    ". ."; 

@media (max-width: 768px) {
    display: flex;
    flex-direction: column ;
}
`;

export const HeadingContainer = styled.div`

  grid-column: 0/ 1;
  background-color: #89cff0;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 20px;
  border-radius: 10px;
  

    p {
        text-align: center;
        font-size: 105%;
        
        margin-left: 1px;
        margin-top: 10px;
        margin-bottom: 4px;

        color: #52683f;
        font-weight: bold;
    }
`;


export const BigHeadingContainer = styled.div`
    grid-row: 0 / 2;
    grid-column: 0 / 2;
    background-color: #89cffa;
    border-radius: 10px;
    padding-left: 18px;
    padding-right: 18px;
    align-content:center;
        
        
p {
    margin-left: 1px;
    margin-top: 10px;
    margin-bottom: 4px;
    
    font-weight: bold;
    
    font-size: 115%;

    text-align: center;
    color: #ffffff;
}
`;


export const SmallHeading = styled.div`
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;

    
    text-align: center;
    text-transform: uppercase;
    font-family: Audiowide;
    font-weight: 900;
    font-size: calc(10px + 1vw);
    letter-spacing: 2.5px;
    
    color: #ffffff;
    border-bottom: 4px solid white;

`;

export const StyledParagraph = styled.div`
  /* Shared styles for all <p> tags */
    font-size: calc(12px + 0.5vw);
    border-radius: 10px;
    margin-left: 1px;
    margin-top: 10px;
    margin-bottom: 7px;

    font-weight: bold;


    text-align: center;
    color: #f4f4f4;
`;





/* --------------------------------------------------------
    SALE BANNER
----------------------------------------------------------*/ 
export const SaleBanner = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border: 1px none #66804e;
  border-radius: 10px;
  background-color: #89cff0;
  opacity: 0.7;
  justify-content: center;
  align-content: spacearound;
`;


export const SaleHeading = styled(StyledParagraph)`
    color: #FFFFFF;
    font-family: Montserrat Classic;
    font-size: calc(0.8rem + 1vw);
    font-weight: 700;
    text-align: center;

    

    @media (max-width: 640px) {
        margin-left: 20px;
        margin-right: 20px;    
    }
`;


/* --------------------------------------------------------
    SLOGAN
----------------------------------------------------------*/ 
export const SloganContainer = styled.div`
    grid-column: span 2;
    
    height: auto;
    padding-top: 3px;
    padding-bottom: 3px;
    
    font-family: Audiowide;
    font-weight: bold;
    font-size: calc(10px + 1vw);
    
    text-align: center;
    text-transform: uppercase;
    color: #3b4b2c;
`;