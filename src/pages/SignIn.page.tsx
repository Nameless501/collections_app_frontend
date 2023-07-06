import { FC } from 'react';
import SignPageWrapper from '../components/SignPageWrapper';
import SignForm from '../features/authentication';
import { SignFormTypes } from '../features/authentication';

const SignInPage: FC = () => {
    return (
        <SignPageWrapper type={SignFormTypes.signIn}>
            <SignForm type={SignFormTypes.signIn} />
        </SignPageWrapper>
    );
};

export default SignInPage;
