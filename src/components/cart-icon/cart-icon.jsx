import styled from 'styled-components';


import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
    color:  #004AAD;
    width: 24px; 
    height: 24px;
    `;

export const CartIconContainer = styled.div`
    width: 45px; 
    height: 45px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer;

    svg {
    filter: invert(47%) sepia(6%) saturate(0%) hue-rotate(214deg) brightness(85%) contrast(75%);
    width: 38px;
    height: 38px;
  }

    @media only screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    }
    `;

export const ItemCount = styled.span`
    color: #004AAD;
    position: absolute; 
    font-size: 22px; 
    font-weight: bold; 
    bottom: 12%;
    text-align: center;
    transform: translateY(-50%)


    @media only screen and (max-width: 768px) {
    font-size: 12px;
    bottom: 12%;
  }
`



 
