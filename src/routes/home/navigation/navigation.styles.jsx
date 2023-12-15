import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const NavigationContainer =  styled.div`
    height: 70px; 
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 25px;
    `;

export const LogoContainer = styled(Link)`
    background-color: #46B4E7;
    height: 40%;
    width: 120px;
    padding-top: 6px;
    padding-bottom: 40px;
    margin-left: 0px;
    `;

    export const MyLogo = styled.img`
    width: 250px;
    height: auto;
  
    @media screen and (max-width: 550px) {
      width: 180px;
      
      margin-top: 10px;
  
    }
  
    @media screen and (max-width: 400px) {
      width: 130px;
  
    }
  `;

export const NavLinks = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
    `;

export const NavLink = styled(Link)`
    color: #004AAD;
    padding: 10px 15px; 
    cursor: pointer;
    font-size: 19px; 
    font-weight: bold;
    `;




