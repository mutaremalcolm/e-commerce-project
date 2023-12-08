import styled from 'styled-components'


export const CheckoutContainer = styled.div`
    width: 55%; 
    min-height: 90vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 50px auto 0; 

    @media only screen and (max-width: 768px) {
    width: 100%;
  }
    `;

export const CheckoutHeader = styled.div` 
   width: 100%; 
   padding: 0px 20px 10px 20px; 
   display: flex; 
   justify-content: space-between; 
   border-bottom: 1px ;
   color: #89cff0;
   text-align: center;
   `
   
export const HeaderBlock = styled.div` 
   text-transform: capitalize; 
   width: 23%; 
   
&:last-child { 
   width: 8%; 
       } 
      `; 
     
export const Total = styled.span` 
   margin-top: 30px; 
   margin-left: auto; 
   font-size: 36px; 
   color: #89cff0;
       `;

export const DeveloperContainer = styled.div`
   display: grid;
   grid-template-rows: repeat(5, 1fr); 
   grid-gap: 0px;
   border: 3px solid #89cff0;
   border-bottom: 1px ;
   color: #89cff0;
   text-align: center;
   padding: 0.5em;
   margin-bottom: 1em;
`