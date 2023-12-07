import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  color: #89cffa;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    color: #89cffa;
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
