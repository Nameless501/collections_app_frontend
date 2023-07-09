import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
} from '../../../utils/validation.util';

export const profileValidationSchema = getResolvedValidationSchema({
    name: getValidationOption(ValidationOptions.string, true),
    email: getValidationOption(ValidationOptions.email, true),
    password: getValidationOption(ValidationOptions.string),
});
