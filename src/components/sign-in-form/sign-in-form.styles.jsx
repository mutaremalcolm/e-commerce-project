import styled from 'styled-components';

export const SignInContainer = styled.div`
  color: #89cffa;
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: left;
  `

  export const TitleWrapper = styled.h2`
    margin: 10px 0;
    color: #89cffa;
    margin: 10px 0 15px;
    letter-spacing: 2px;
    text-align: center;


    @media (max-width: 400px){
    font-size: 100%;
    font-weight: 900px;
  }

  `;

  export const ButtonsContainer = styled.div`
    color: #89cffa;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;

    p {
    font-size: 15px;
    text-align: center;
    margin: 0;
    padding-top: 5px;
  }
     
`;


