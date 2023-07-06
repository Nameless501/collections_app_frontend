import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps, DefaultValues } from 'react-hook-form';
import { signValidationConfig } from './validation.config';
import { FormInputType } from '../types/common.types';
import { SignFormTypes } from './enums.config';

export const getHookFormConfig = (
    type: SignFormTypes,
    defaultValues: DefaultValues<FormInputType>
): UseFormProps<FormInputType> => ({
    resolver: yupResolver(signValidationConfig[type]),
    mode: 'all',
    defaultValues,
});
