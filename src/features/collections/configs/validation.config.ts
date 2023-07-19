import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
    getArraySchema,
    getObjectSchema,
} from '../../../utils/validation.util';

export const collectionValidationSchema = getResolvedValidationSchema({
    title: getValidationOption(ValidationOptions.string, true),
    subject: getValidationOption(ValidationOptions.string, true),
    description: getValidationOption(ValidationOptions.string, true),
    file: getValidationOption(ValidationOptions.image),
});

const fieldValidationConfig = {
    label: getValidationOption(ValidationOptions.string, true),
    type: getValidationOption(ValidationOptions.string, true),
};

export const fieldsValidationSchema = getResolvedValidationSchema({
    fields: getArraySchema(getObjectSchema(fieldValidationConfig)),
});

export const fieldValidationSchema = getResolvedValidationSchema(fieldValidationConfig);