import { Suspense, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Spinner from './components/spinner/spinner.component';

import { GlobalStyles } from './global-styles';


import Home from './routes/home/home.component';
import Navigation from './routes/home/navigation/navigation.component';
import Authentication from './routes/home/authentication/authentication.component';
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop/shop.components';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.reducer';


const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        const pickedUser = user && (({accessToken, email}) => ({accessToken, email}))(user);
        console.log(setCurrentUser(pickedUser))
        dispatch(setCurrentUser(pickedUser));
    });
         
    return unsubscribe;
    }, []);
 
  return(
    <>
    <Suspense fallback={<Spinner />}>
    < GlobalStyles />
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} /> 
      <Route path='shop/*' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
    </Suspense>
    </>
  );
}

export default App
 