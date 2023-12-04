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
    color: #89cffa;
    width: 50%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
    `;

export const NavLink = styled(Link)`
    padding: 10px 15px; 
    cursor: pointer;
    `;




