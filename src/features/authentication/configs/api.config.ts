import { ApiMethods, ApiRoutes } from '../../../configs/api.config';
import {
    SignInCredentialsType,
    SignUpCredentialsType,
} from '../types/common.types';
import { SignFormTypes } from './enums.config';

const signMethodsConfig = {
    [SignFormTypes.signIn]: ApiMethods.post,
    [SignFormTypes.signUp]: ApiMethods.post,
};

const signPathConfig = {
    [SignFormTypes.signIn]: ApiRoutes.signIn,
    [SignFormTypes.signUp]: ApiRoutes.signUp,
};

export const getSignQueryOptions = (
    type: SignFormTypes,
    credentials?: SignInCredentialsType | SignUpCredentialsType
) => ({
    url: signPathConfig[type],
    method: signMethodsConfig[type],
    body: { ...credentials },
});
