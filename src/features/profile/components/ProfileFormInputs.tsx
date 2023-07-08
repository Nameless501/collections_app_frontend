import { FC } from 'react';
import { TextField } from '@mui/material';
import { profileFormInputsConfig } from '../configs/inputs.config';
import { ProfileFormInputsPropsType } from '../types/common.types';

const ProfileFormInputs: FC<ProfileFormInputsPropsType> = ({
    register,
    errors,
}) => {
    return (
        <>
            {profileFormInputsConfig.map(({ name, label, type }, index) => (
                <TextField
                    key={name + index}
                    {...register(name)}
                    label={label}
                    type={type}
                    variant="standard"
                    fullWidth
                />
            ))}
        </>
    );
};

export default ProfileFormInputs;
