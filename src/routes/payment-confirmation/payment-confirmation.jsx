import React from 'react';

import { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

import { stripePromise } from '../../utils/firebase/stripe/stripe.utils';
import { Elements } from '@stripe/react-stripe-js';

import { 
  PageContainer, 
  ThankYouMessage,
  BoxContainer,
  BoxDivWinter,
  BoxDivSummer,
  ThankYouMessageContainer, 
  IconBoxes,
  BoxText,
  BigBoxText,
  SmallBoxText,
} from './payment-confirmation-styles';

const Thankyou = () => {
  const navigate = useNavigate();
  const NavigateAboutHandler = () => navigate('/about');
  const NavigateHomeHandler = () => navigate('/');
  
  const NavigateSummerHandler = () => navigate('/shop/summer');
  const NavigateWinterHandler = () => navigate('/shop/winter');

return (
  <Fragment>
      <PageContainer>

          
                     


          <ThankYouMessageContainer>
              <ThankYouMessage>
                  <Elements stripe={stripePromise}>                       
    
                  </Elements>
              </ThankYouMessage>
          </ThankYouMessageContainer>



          <BoxContainer>
              <BoxDivWinter onClick={NavigateWinterHandler}>
                  <BoxText>
                      <SmallBoxText> Shop the </SmallBoxText>
                      <BigBoxText> Winter </BigBoxText>
                      <SmallBoxText> SALE </SmallBoxText>
                  </BoxText>                    
              </BoxDivWinter>

              <BoxDivSummer onClick={NavigateSummerHandler}>
                  <BoxText>
                      <SmallBoxText> Shop the </SmallBoxText>
                      <BigBoxText> Summer </BigBoxText>
                      <SmallBoxText> SALE </SmallBoxText>
                  </BoxText>
              </BoxDivSummer>
          </BoxContainer>




          
          



      </PageContainer>

      <Footer />

  </Fragment>
)
};

export default Thankyou;