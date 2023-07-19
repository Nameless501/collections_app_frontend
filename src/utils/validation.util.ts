import Joi, { Schema, ObjectSchema, ArraySchema } from 'joi';
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

export const getObjectSchema = (params: FieldValues): ObjectSchema =>
    Joi.object(params);

export const getArraySchema = (params: FieldValues): ArraySchema =>
    Joi.array().items(params);

export function getResolvedValidationSchema(params: FieldValues) {
    return joiResolver(getObjectSchema(params));
}
