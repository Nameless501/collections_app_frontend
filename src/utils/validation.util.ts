import Joi, { Schema, ObjectSchema } from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { FieldValues } from 'react-hook-form';
import {
    ValidationOptions,
    validationConfig,
    validationErrors,
} from '../configs/validation.config';

export const getValidationOption = (
    option: ValidationOptions,
    required = false
): Schema => {
    const schema = required
        ? validationConfig[option].required()
        : validationConfig[option].allow('');
    return schema.messages(validationErrors);
};

function getValidationSchema(params: FieldValues): ObjectSchema {
    return Joi.object(params);
}

export function getResolvedValidationSchema(params: FieldValues) {
    return joiResolver(getValidationSchema(params));
}
