import { FC } from 'react';
import SignFormWrapper from '../components/SignFormWrapper';
import SignForm from '../features/authentication';
import { SignFormTypes } from '../features/authentication';

const SignUpPage: FC = () => {
    return (
        <SignFormWrapper type={SignFormTypes.signUp}>
            <SignForm type={SignFormTypes.signUp} />
        </SignFormWrapper>
    );
};

export default SignUpPage;
