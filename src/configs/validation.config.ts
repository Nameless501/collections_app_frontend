import Joi from 'joi';

export enum ValidationOptions {
    string = 'string',
    email = 'email',
    number = 'number',
    url = 'url',
}

export const validationConfig = {
    [ValidationOptions.string]: Joi.string(),
    [ValidationOptions.email]: Joi.string().email({ tlds: { allow: false } }),
    [ValidationOptions.number]: Joi.number(),
    [ValidationOptions.url]: Joi.string().uri(),
};
