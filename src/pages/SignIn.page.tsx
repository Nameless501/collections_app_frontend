import { FC } from 'react';
import SignFormWrapper from '../components/SignFormWrapper';
import SignForm from '../features/authentication';
import { SignFormTypes } from '../features/authentication';

const SignInPage: FC = () => {
    return (
        <SignFormWrapper type={SignFormTypes.signIn}>
            <SignForm type={SignFormTypes.signIn} />
        </SignFormWrapper>
    );
};

export default SignInPage;
