import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';


import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { ProductCardContainer } from './product-card.styles';


const ProductCard = ({ product }) => { 
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;