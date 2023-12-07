import styled from 'styled-components';

export const SignUpContainer = styled.div`
  color: #89cffa;
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  };
  `

  export const TitleWrapper = styled.h2`
    margin: 10px 0;
    color: #89cffa;
  `;

  export const ButtonsContainer = styled.div`
    color: #89cffa;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
  }  
`;


