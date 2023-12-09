import { useSelector  } from 'react-redux';

import Footer from '../../components/footer/footer.component';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import PaymentForm from '../../components/payments-form/payment-form.component';

import { CheckoutContainer, 
         CheckoutHeader, 
         HeaderBlock, 
         Total, 
         DeveloperContainer,
        } from './checkout.styles.jsx';



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
                        <DeveloperContainer>
                            <h3>Hey there!!! Malcolm your Developer here</h3>
                            <span> Please use the test card details below to simulate your purchase</span>
                            <span> Card Number:     4242 4242 4242 4242</span>
                            <span> Expiry Data:     12/25</span>
                            <span> CVC:             666</span>
                            <span> ZIP:             90210</span>
                        </DeveloperContainer>
            </CheckoutContainer>
            <Footer />
        </>
    )
}

export default Checkout;