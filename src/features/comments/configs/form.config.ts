import { ValidationOptions } from '../../../configs/validation.config';
import {
    getResolvedValidationSchema,
    getValidationOption,
} from '../../../utils/validation.util';

export const commentInputConfig = {
    name: 'value',
    label: 'item:comments.form.labels.newComment',
    multiline: true,
    rows: 2,
};

export const newCommentValidationSchema = getResolvedValidationSchema({
    value: getValidationOption(ValidationOptions.string, true),
});

export const newCommentDefaultValue = {
    value: '',
};
