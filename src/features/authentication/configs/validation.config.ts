import { SignFormTypes } from './enums.config';
import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
} from '../../../utils/validation.util';

export const signValidationSchema = {
    [SignFormTypes.signIn]: getResolvedValidationSchema({
        email: getValidationOption(ValidationOptions.email, true),
        password: getValidationOption(ValidationOptions.string, true),
    }),
    [SignFormTypes.signUp]: getResolvedValidationSchema({
        name: getValidationOption(ValidationOptions.string, true),
        email: getValidationOption(ValidationOptions.email, true),
        password: getValidationOption(ValidationOptions.string, true),
    }),
};
