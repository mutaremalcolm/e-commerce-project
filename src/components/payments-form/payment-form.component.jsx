 import { useState } from 'react';

 import { useNavigate } from 'react-router-dom';

 import emojione from 'emojione';
 
 import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

 import { useSelector } from 'react-redux';

 import { selectCartCount, selectCartTotal } from '../../store/cart/cart.selector';

 import { selectCurrentUser } from '../../store/user/user.selector';

 import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
 
 //import {} from '../../../netlify/create-payment-intent'
 
 import { PaymentFormContainer, FormContainer   } from './payment-form.styles'

 const PaymentForm = () => {
    const message = 'Congratulations! Payment Successful! Check your email for your shipping information!';
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements(); 
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false) 

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

    setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent',  {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount * 100})
      }).then((res) => res.json());  
      

      const {paymentIntent: { client_secret},} = response;

       

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest',
          }
        }
      });

      setIsProcessingPayment(false); 

      if(paymentResult.error){
        alert(paymentResult.error.message);
      }else{
        if(paymentResult.paymentIntent.status === 'succeeded') {
          alert(emojione.toImage(message));
           
        }
      }

    }

      
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment: </h2>
             <CardElement />
             <Button  disabled={isProcessingPayment}
             buttonType={ BUTTON_TYPES_CLASSES.inverted }
             > 
              {' '}
             Pay Now {' '} </Button> 
            </FormContainer> 
        </PaymentFormContainer>
    )
 }

 export default PaymentForm; 