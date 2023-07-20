import { ValidationOptions } from '../../../configs/validation.config';
import {
    getArraySchema,
    getValidationOption,
} from '../../../utils/validation.util';
import { FieldTypes } from '../../../configs/common.config';

export const itemValidationSchema = {
    title: getValidationOption(ValidationOptions.string, true),
    tags: getArraySchema(getValidationOption(ValidationOptions.string)),
};

export const typeValidationConfig = {
    [FieldTypes.integer]: getValidationOption(ValidationOptions.number, true),
    [FieldTypes.string]: getValidationOption(ValidationOptions.string, true),
    [FieldTypes.text]: getValidationOption(ValidationOptions.string, true),
    [FieldTypes.boolean]: getValidationOption(ValidationOptions.boolean, true),
};

export const getFieldSchema = (type: FieldTypes) => ({
    fieldId: getValidationOption(ValidationOptions.number, true),
    value: typeValidationConfig[type],
});
