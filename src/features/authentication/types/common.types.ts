import { BaseSyntheticEvent } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignFormInputs, SignFormTypes } from '../configs/enums.config';
import { ChildrenPropsType } from '../../../types/props.types';
import { AppRoutes } from '../../../configs/routes.config';

export type FormInputType = {
    [SignFormInputs.email]: string;
    [SignFormInputs.password]: string;
    [SignFormInputs.name]?: string;
};

export type FormLinkConfigType = {
    route: AppRoutes;
    text: string;
    name: string;
};

export type SignFormConfigType = {
    title: string;
    link: FormLinkConfigType;
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
    config: SignFormConfigType;
} & ChildrenPropsType;

export type FormLinkPropsType = {
    config: FormLinkConfigType;
};

export type SignInCredentialsType = {
    [SignFormInputs.email]: string;
    [SignFormInputs.password]: string;
};

export type SignUpCredentialsType = {
    [SignFormInputs.name]: string;
} & SignInCredentialsType;
