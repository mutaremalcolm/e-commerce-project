import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import { 
         auth,
         signInWithGooglePopup, 
         signInWithGoogleRedirect,
         createUserDocumentFromAuth,
         } from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../../components/sign-up-form/sign-up-form.components';



const SignIn = () => {
    useEffect(()=> {
        async function getResponse () {
        const response = await getRedirectResult(auth)
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
                }
            }
            getResponse();
            }, [] )



    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 

    

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

export default SignIn