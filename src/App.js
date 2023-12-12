import { lazy, Suspense, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Spinner from './components/spinner/spinner.component';

import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global-styles';

import { setCurrentUser } from './store/user/user.reducer';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() => import('./routes/home/authentication/authentication.component'));
const Shop = lazy(() => import('./routes/shop/shop.components'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Navigation = lazy(() => import('./routes/home/navigation/navigation.component'));


const App = () => { 
  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        const pickedUser = user && (({accessToken, email}) => ({accessToken, email}))(user);
        dispatch(setCurrentUser(pickedUser));
    });
         
    return unsubscribe;
    }, []);
 
  return(
    <>
    <Suspense fallback={<Spinner />}>
    <GlobalStyle />
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
 