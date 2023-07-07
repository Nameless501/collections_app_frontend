import { BaseSyntheticEvent, ReactNode } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignFormInputs, SignFormTypes } from '../configs/enums.config';

export type FormInputType = {
    [SignFormInputs.email]: string;
    [SignFormInputs.password]: string;
    [SignFormInputs.name]?: string;
};

export type SignInputsType<T> = Array<{
    name: T;
    label: string;
    type?: string;
}>;

export type SignInputsConfigType<T> = {
    [key in SignFormTypes]: SignInputsType<T>;
};

export type InputPropsType = {
    label: string;
    error?: FieldError;
    name: SignFormInputs;
    register: UseFormRegister<FormInputType>;
    type?: string;
};

export type FormPropsType = {
    type: SignFormTypes;
};

export type FormWrapperPropsType = {
    isValid: boolean;
    handleSubmit: (e: BaseSyntheticEvent) => void;
    error?: string;
    children: ReactNode;
};

export type SignInCredentialsType = {
    [SignFormInputs.email]: string;
    [SignFormInputs.password]: string;
};

export type SignUpCredentialsType = {
    [SignFormInputs.name]: string;
} & SignInCredentialsType;
