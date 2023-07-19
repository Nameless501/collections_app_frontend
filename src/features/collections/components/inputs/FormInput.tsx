import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import { FormInputPropsType } from '../../types/common.types';

const FormInput: FC<FormInputPropsType> = ({
    register,
    name,
    label,
    type,
    error,
    multiline,
    rows,
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
            multiline={multiline}
            rows={rows}
        />
    );
};

export default FormInput;
