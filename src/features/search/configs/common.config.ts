import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
} from '../../../utils/validation.util';

export const searchInputConfig = {
    inputProps: { 'aria-label': 'search' },
    placeholder: 'common:search.placeholder',
    name: 'query',
};

export const searchFormDefaultValue = {
    query: '',
};

export const searchFormValidationSchema = getResolvedValidationSchema({
    query: getValidationOption(ValidationOptions.string, true),
});

export const searchResultConfig = {
    title: 'common:search.title',
    warning: 'common:search.warning',
};
