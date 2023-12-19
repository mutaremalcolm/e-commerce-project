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

    @media only screen and (max-width: 768px) {
  .title {
    font-size: 20px; // Adjust font size for mobile
    margin-bottom: 15px; // Adjust margin for mobile
  }
}
  }

  .preview {
    color: #004AAD;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;

