import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    color: #004AAD;
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

  }

  .preview {
    color: #004AAD;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    /* Media query for smaller screens */
    @media (max-width: 768px) { /* Adjust breakpoint as needed */
      grid-template-columns: repeat(2, 1fr); /* Show 2 items per row */
    }
  }

`;

