import { useSelector  } from 'react-redux';

import Footer from '../../components/footer/footer.component';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import PaymentForm from '../../components/payments-form/payment-form.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';



const Checkout = () => { 
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    return (
        <>
            <CheckoutContainer>
                <CheckoutHeader>
                    <HeaderBlock>
                        <span>Product</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Description</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Quantity</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Price</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Remove</span>
                    </HeaderBlock>
                </CheckoutHeader>
                    {
                        cartItems.map((cartItem) => 
                               < CheckOutItem  key={cartItem.id} cartItem={cartItem}/>
                        )}
                        <Total>Total: R{cartTotal}</Total>
                        <PaymentForm />
            </CheckoutContainer>
            <Footer />
        </>
    )
}

export default Checkout;