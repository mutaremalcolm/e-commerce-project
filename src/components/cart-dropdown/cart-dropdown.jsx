import { useSelector, useDispatch } from 'react-redux';

import { CartDropdownContainer,
        EmptyMessage, 
        CartItems } from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom'; 

import Button from '../button/button.component';

import { setIsCartOpen } from '../../store/cart/cart.reducer';

import CartItem from '../cart-item/cart-item.component'; 

import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout') 
    }

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartDropdownContainer >
            <CartItems>
               {
                cartItems.length ? (cartItems.map((item) => (
                <CartItem key='item.id' cartItem={item} />
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
               }    
            </CartItems>
            <Button onClick={ () => {
                goToCheckoutHandler();
                toggleIsCartOpen();
                }}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};
   
export default CartDropdown 