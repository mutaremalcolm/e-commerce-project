import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    color: #89cffa;
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    ${'' /* @media only screen and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  } */}

  @media only screen and (max-width: 768px) {
    margin: 10px auto;
  }
`