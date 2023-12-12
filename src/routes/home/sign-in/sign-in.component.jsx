import { useEffect, useState } from 'react';
import { getRedirectResult, signInWithEmailAndPassword, signInWithGooglePopup } from 'firebase/auth'

import { 
         auth,
         signInWithGooglePopup, 
         signInWithGoogleRedirect,
         createUserDocumentFromAuth,
         } from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../../components/sign-up-form/sign-up-form.components';



const SignIn = () => {
    const [loginSuccessful, setLoginSuccessful] = useState(false);


    useEffect(()=> {
        async function getResponse () {
        const response = await getRedirectResult(auth)
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
                setLoginSuccessful(true);
                alert('Login Successful');
                }
            }
            
            getResponse();
            }, [] )


    const logGoogleUser = async () => {
        try {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user); 
        setLoginSuccessful(true);
        alert('Login Successful'); 
        } catch (error){
            alert(error)
        }

        const logWithEmailAndPassword = async (email, password) => {
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const userDocRef = await createUserDocumentFromAuth(userCredential.user);
              setLoginSuccessful(true);
              alert('Login Successful with Email!');
            } catch (error) {
              alert(error);
            }
          };
        
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
            <button onClick={signInWithGoogleRedirect}>
            Sign in with Google ReDirect
            </button>
            <SignUpForm />
        </div>
    )
    }
}

export default SignIn;