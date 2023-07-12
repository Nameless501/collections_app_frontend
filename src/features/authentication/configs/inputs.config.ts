import { SignInputsType, SignInputsConfigType } from '../types/common.types';
import { SignFormInputs, SignFormTypes } from './enums.config';

const signInInputs: SignInputsType<SignFormInputs> = [
    {
        name: SignFormInputs.email,
        label: 'sign:inputs.email',
    },
    {
        name: SignFormInputs.password,
        label: 'sign:inputs.password',
        type: 'password',
    },
];

const signUpInputs: SignInputsType<SignFormInputs> = [
    {
        name: SignFormInputs.name,
        label: 'sign:inputs.name',
    },
    ...signInInputs,
];

export const signInputsConfig: SignInputsConfigType<SignFormInputs> = {
    [SignFormTypes.signIn]: signInInputs,
    [SignFormTypes.signUp]: signUpInputs,
};
