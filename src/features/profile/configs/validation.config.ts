import * as yup from 'yup';
import { ProfileFormInputs } from './enums.config';

export const profileValidationConfig = yup
    .object({
        [ProfileFormInputs.name]: yup.string(),
        [ProfileFormInputs.email]: yup.string().email(),
        [ProfileFormInputs.password]: yup.string(),
    })
    .required();
