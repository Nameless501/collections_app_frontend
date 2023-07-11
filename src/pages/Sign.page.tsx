import { FC } from 'react';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { SignForm } from '../features/authentication';
import { SignPagePropsType } from '../types/props.types';

const SignPage: FC<SignPagePropsType> = ({ type }) => {
    return (
        <FlexCenterWrapper>
            <SignForm type={type} />
        </FlexCenterWrapper>
    );
};

export default SignPage;
