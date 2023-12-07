import styled from
 
'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
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
  color: #89cff0;
  width: 23%;
`;

export const QuantityContainer = styled.div`
  color: #89cff0;
  width: 23%;
  display: flex;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const Value = styled.span`
  color: #89cff0;
  margin: 0 10px;
`;

export const Price = styled.div`
  color: #89cff0;
  width: 23%;
`;

export const RemoveButton = styled.button`
  color: #89cff0;
  padding-left: 12px;
  cursor: pointer;
`;