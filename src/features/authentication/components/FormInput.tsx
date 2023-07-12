import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import { InputPropsType } from '../types/common.types';

const FormInput: FC<InputPropsType> = ({
    register,
    name,
    label,
    type,
    error,
}) => {
    const { t } = useTranslation();

    return (
        <TextField
            {...register(name)}
            fullWidth
            label={t(label)}
            error={error ? true : false}
            helperText={t(error?.message)}
            type={type}
        />
    );
};

export default FormInput;
