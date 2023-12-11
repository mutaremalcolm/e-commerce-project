import { memo } from 'react'; 

import { useDispatch } from 'react-redux'; 

import { addItemToCart, clearItemFromCart,  removeItemFromCart } from '../../store/cart/cart.reducer';
 

import { 
    CheckoutItemContainer,
    ImageContainer,
    Image,
    Name,
    QuantityContainer,
    Arrow,
    Value,
    Price,
    RemoveButton
    } from  './checkout-item.styles';


const CheckOutItem = memo(({cartItem}) => {
    const {name,  imageUrl,  price, quantity} = cartItem;
    const dispatch = useDispatch();
    
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <QuantityContainer>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </QuantityContainer>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;</RemoveButton>
        </CheckoutItemContainer>
    )

});

export default CheckOutItem;