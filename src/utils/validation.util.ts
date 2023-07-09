import Joi, { Schema, ObjectSchema } from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { FieldValues } from 'react-hook-form';
import {
    ValidationOptions,
    validationConfig,
} from '../configs/validation.config';

export const getValidationOption = (
    option: ValidationOptions,
    required = false
): Schema =>
    required
        ? validationConfig[option].required()
        : validationConfig[option].allow('');

function getValidationSchema(params: FieldValues): ObjectSchema {
    return Joi.object(params);
}

export function getResolvedValidationSchema(params: FieldValues) {
    return joiResolver(getValidationSchema(params));
}
