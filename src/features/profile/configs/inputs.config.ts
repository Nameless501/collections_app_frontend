import { ProfileInputsType } from '../types/common.types';
import { ProfileFormInputs } from './enums.config';

export const profileFormInputsConfig: ProfileInputsType = [
    {
        name: ProfileFormInputs.name,
        label: 'profile:inputs.labels.name',
    },
    {
        name: ProfileFormInputs.email,
        label: 'profile:inputs.labels.email',
    },
    {
        name: ProfileFormInputs.password,
        label: 'profile:inputs.labels.password',
        type: 'password',
    },
];
