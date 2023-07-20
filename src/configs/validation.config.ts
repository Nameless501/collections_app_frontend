import Joi from 'joi';

export enum ValidationOptions {
    string = 'string',
    email = 'email',
    number = 'number',
    url = 'url',
    image = 'image',
    boolean = 'boolean',
}

export const validationErrors = {
    'number.base': 'errors:validation.number.base',
    'string.base': 'errors:validation.string.base',
    'string.uri': 'errors:validation.string.uri',
    'string.email': 'errors:validation.string.email',
    'string.min': 'errors:validation.string.min',
    'string.max': 'errors:validation.string.max',
    'string.empty': 'errors:validation.required',
    'any.required': 'errors:validation.required',
};

export const validationConfig = {
    [ValidationOptions.string]: Joi.string(),
    [ValidationOptions.email]: Joi.string().email({ tlds: { allow: false } }),
    [ValidationOptions.number]: Joi.number(),
    [ValidationOptions.url]: Joi.string().uri(),
    [ValidationOptions.image]: Joi.object().allow(null),
    [ValidationOptions.boolean]: Joi.boolean(),
};
