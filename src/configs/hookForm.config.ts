import {
    UseFormProps,
    DefaultValues,
    FieldValues,
    Resolver,
} from 'react-hook-form';

export function getHookFormConfig<T extends FieldValues>(
    validationSchema: Resolver<T>,
    defaultValues: DefaultValues<T>
): UseFormProps<T> {
    return {
        mode: 'all',
        defaultValues,
        resolver: validationSchema,
    };
}
