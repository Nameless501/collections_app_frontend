import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps, DefaultValues } from 'react-hook-form';
import { profileValidationConfig } from './validation.config';
import { InputsType } from '../types/common.types';

export const getHookFormConfig = (
    defaultValues: DefaultValues<InputsType>
): UseFormProps<InputsType> => ({
    resolver: yupResolver<InputsType>(profileValidationConfig),
    mode: 'all',
    defaultValues,
});
