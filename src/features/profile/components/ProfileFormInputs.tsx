import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import { profileFormInputsConfig } from '../configs/inputs.config';
import { ProfileFormInputsPropsType } from '../types/common.types';

const ProfileFormInputs: FC<ProfileFormInputsPropsType> = ({
    register,
    errors,
}) => {
    const { t } = useTranslation();

    return (
        <>
            {profileFormInputsConfig.map(({ name, label, type }, index) => (
                <TextField
                    key={name + index}
                    {...register(name)}
                    label={t(label)}
                    type={type}
                    variant="standard"
                    fullWidth
                    error={errors[name] ? true : false}
                    helperText={t(errors[name]?.message)}
                />
            ))}
        </>
    );
};

export default ProfileFormInputs;
