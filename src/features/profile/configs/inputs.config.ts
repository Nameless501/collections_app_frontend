import { ProfileInputsType } from '../types/common.types';
import { ProfileFormInputs } from './enums.config';

export const profileFormInputsConfig: ProfileInputsType = [
    {
        name: ProfileFormInputs.name,
        label: 'Name',
    },
    {
        name: ProfileFormInputs.email,
        label: 'Email',
    },
    {
        name: ProfileFormInputs.password,
        label: 'New password',
        type: 'password',
    },
];
