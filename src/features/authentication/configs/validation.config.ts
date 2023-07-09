import { SignFormTypes } from './enums.config';
import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
} from '../../../utils/validation.util';

export const signValidationSchema = {
    [SignFormTypes.signIn]: getResolvedValidationSchema({
        email: getValidationOption(ValidationOptions.email),
        password: getValidationOption(ValidationOptions.string),
    }),
    [SignFormTypes.signUp]: getResolvedValidationSchema({
        name: getValidationOption(ValidationOptions.string),
        email: getValidationOption(ValidationOptions.email),
        password: getValidationOption(ValidationOptions.string),
    }),
};
