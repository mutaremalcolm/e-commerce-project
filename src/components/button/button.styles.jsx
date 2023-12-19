import styled from 'styled-components';

export const BaseButton = styled.button`
    width: 100%;  
    height: 50px; 
    letter-spacing: 0.5px; 
    line-height: 50px; 
    padding: 0 1.5em 0 1.5em; 
    font-size: 15px; 
    background-color: #004AAD;; 
    color: white; 
    text-transform: uppercase; 
    font-family: 'Open Sans Condensed'; 
    font-weight: bolder; 
    border: none; 
    cursor: pointer; 
    display: flex; 
    justify-content: center; 

    @media only screen and (max-width: 768px) {
    padding: 5px 20px 5px 20px;
    font-size: 12px;
  }

    &:hover { 
        background-color: #1a91c8; 
        color: black; 
        border: 1px solid black;
         }`;

    export const GoogleSignInButton = styled(BaseButton)`
        background-color: #004AAD;; 
        color: white; 
    
    &:hover { 
        background-color: #1a91c8; 
        border: none; 
        }
        
        @media only screen and (max-width: 768px) {
            padding: 0.5em 1em 0.5em 1em;
            font-size: 12px;
          };
          `

export const InvertedButton = styled(BaseButton)`
    background-color: #89cff0;
     color: #004AAD; 
     border: 1px #004AAD; 
     
&:hover { 
    background-color: #1a91c8;
    color: white; 
    border: none; 
    } 

    @media only screen and (max-width: 768px) {
    padding: 0.5em 1em 0.5em 1em;
    font-size: 12px;
  }
`;




