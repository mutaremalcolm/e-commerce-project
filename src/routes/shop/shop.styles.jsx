import styled from 'styled-components';


export const ProductsContainer = styled.div`
    color: #89cffa;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
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
`