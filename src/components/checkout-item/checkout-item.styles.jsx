import styled from
 
'styled-components';

export const CheckoutItemContainer = styled.div`
  color: #004AAD;
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid blue;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.div`
  color: #004AAD;
  width: 23%;
`;

export const QuantityContainer = styled.div`
  color: #004AAD;
  width: 23%;
  display: flex;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const Value = styled.span`
  color: #004AAD;
  margin: 0 10px;
`;

export const Price = styled.div`
  color: #004AAD;
  width: 23%;
`;

export const RemoveButton = styled.button`
  color: #004AAD;
  padding-left: 12px;
  cursor: pointer;
`;