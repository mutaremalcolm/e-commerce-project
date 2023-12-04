import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { selectCurrentUser } from '../../../store/user/user.selector';

import { useSelector } from 'react-redux';

import CartIcon from '../../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown';

import { NavigationContainer, NavLinks, NavLink, LogoContainer, MyLogo } from './navigation.styles.jsx';

//import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import  { ReactComponent as MangoFashion }  from '../../../assets/MangoStore.svg'
 
import {signOutUser } from '../../../utils/firebase/firebase.utils';
 
import { selectIsCartOpen } from '../../../store/cart/cart.selector';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <MyLogo MangoFashion className='logo'/>
                </LogoContainer>
                    <NavLinks>
                  <NavLink to='/shop'>
                    SHOP
                  </NavLink>
                  {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                         SIGN OUT 
                         </NavLink>)
                        : (<NavLink to='/auth'>
                    SIGN IN
                  </NavLink> )
                  }
                    <CartIcon />  
                </NavLinks>
                { isCartOpen && <CartDropdown />}
            </NavigationContainer> 
            <Outlet />
        </Fragment>
    )
  }

  export default Navigation