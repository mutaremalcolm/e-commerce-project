import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { PersistGate  } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js'; 
import { stripePromise } from './utils/firebase/stripe/stripe.utils'

import { Provider } from 'react-redux';
//import './global-styles.js';

import reportWebVitals from './reportWebVitals';

import App from './App';
import { store, persistor } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <Provider store={store}>
    {/*<PersistGate loading = {null} persistor={persistor}>*/}
      <BrowserRouter>
        <Elements stripe={stripePromise}>
            <App /> 
        </Elements>
      </BrowserRouter> 
     {/*</PersistGate>*/}
  </Provider>
  </React.StrictMode>
);


reportWebVitals();
   