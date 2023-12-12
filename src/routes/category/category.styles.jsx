import styled from 'styled-components';

export const PageWrapper = styled.div`
  /* margin-left: 15px;
  margin-right: 15px; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const CategoryContainer = styled.div`
    color:  #004AAD;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    border-radius: 10px;

    padding-top: 15px;
    padding-bottom: 15px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    row-gap: 10px;
  }
    `;


export const CategoryTitle = styled.h2`
    color: #004AAD;
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;