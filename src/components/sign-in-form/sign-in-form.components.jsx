import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
       } from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer, TitleWrapper } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
    }; 

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
        const {user} = await signInAuthUserWithEmailAndPassword(
            email, 
            password
            );
        alert(`User ${user.email} Successfully logged in! Click MangoStore or Shop to continue Shopping`);

        resetFormFields();   
        } catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                break;
                case 'auth/invalid-login-credentials':
                    alert('invalid log in credentials');
                break;
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
    }

    
    return (
        <SignInContainer>
            <TitleWrapper>Already have an account?</TitleWrapper>
            <span>Sign in with your email & password</span>
            <form onSubmit={handleSubmit}>
        
                <FormInput 
                label='Email'
                type='email' required 
                onChange={handleChange} 
                name='email' 
                value={email}/>

                <FormInput 
                label='Password'
                type='password' required 
                onChange={handleChange} 
                name='password' 
                value={password}/>

                <ButtonsContainer>
                <Button type='submit'>Sign In</Button>

                <br />

                <p> Sign in with </p>

                <br /> 

                <Button 
                  buttonType={BUTTON_TYPES_CLASSES.google}
                  type='button'
                  onClick={signInWithGoogle}
                  
                  >Google sign In
                  </Button> 
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;