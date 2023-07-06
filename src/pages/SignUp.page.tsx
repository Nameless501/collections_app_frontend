import { FC } from "react";
import SignPageWrapper from "../components/SignPageWrapper";
import SignForm from '../features/authentication';
import { SignFormTypes } from "../features/authentication";

const SignUpPage: FC = () => {
    return (
        <SignPageWrapper type={SignFormTypes.signUp} >
            <SignForm type={SignFormTypes.signUp} />
        </SignPageWrapper>
    );
}

export default SignUpPage;