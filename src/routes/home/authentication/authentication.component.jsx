
import SignUpForm from '../../../components/sign-up-form/sign-up-form.components';
import SignInForm from '../../../components/sign-in-form/sign-in-form.components';
import { Fragment } from 'react';
import Footer from "../../../components/footer/footer.component";

import { AuthenticationContainer, PageWrapper, FooterWrapper } from  './authentication.styles.jsx';



const Authentication = () => {
    return (
        <Fragment>
        <PageWrapper>
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
        <FooterWrapper>
        <Footer />
        </FooterWrapper>
        </PageWrapper>
        </Fragment>
    );
};

export default Authentication;