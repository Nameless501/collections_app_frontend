import { SignInputsType, SignInputsConfigType } from '../types/common.types';
import { SignFormInputs, SignFormTypes } from './enums.config';

const signInInputs: SignInputsType<SignFormInputs> = [
    {
        name: SignFormInputs.email,
        label: 'Email',
    },
    {
        name: SignFormInputs.password,
        label: 'Password',
        type: 'password',
    },
];

const signUpInputs: SignInputsType<SignFormInputs> = [
    {
        name: SignFormInputs.name,
        label: 'Name',
    },
    ...signInInputs,
];

export const signInputsConfig: SignInputsConfigType<SignFormInputs> = {
    [SignFormTypes.signIn]: signInInputs,
    [SignFormTypes.signUp]: signUpInputs,
};
