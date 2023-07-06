import * as yup from 'yup';
import { SignFormTypes } from './enums.config';

const signInValidationOptions = {
    email: yup.string().email().required(),
    password: yup.string().required(),
};

const signUpValidationOptions = {
    ...signInValidationOptions,
    name: yup.string().required(),
};

export const signInValidationConfig = yup
    .object(signInValidationOptions)
    .required();

export const signUpValidationConfig = yup
    .object(signUpValidationOptions)
    .required();

export const signValidationConfig = {
    [SignFormTypes.signIn]: signInValidationConfig,
    [SignFormTypes.signUp]: signUpValidationConfig,
};
