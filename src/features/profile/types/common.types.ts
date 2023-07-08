import { BaseSyntheticEvent } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ProfileFormInputs } from '../configs/enums.config';
import { ChildrenPropsType } from '../../../types/props.types';

export type ProfileInputsType = Array<{
    name: ProfileFormInputs;
    label: string;
    type?: string;
}>;

export type InputsType = {
    [key in ProfileFormInputs]?: string;
};

export type ProfileFormInputsPropsType = {
    errors: FieldErrors<InputsType>;
    register: UseFormRegister<InputsType>;
};

export type ProfileFormWrapperPropsType = {
    handleSubmit: (e: BaseSyntheticEvent) => void;
    disabled: boolean;
    error?: string;
} & ChildrenPropsType;
