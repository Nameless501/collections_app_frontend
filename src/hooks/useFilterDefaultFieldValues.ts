import { useCallback } from 'react';
import { FieldValues } from 'react-hook-form';

function useFilterDefaultFieldValues<T extends FieldValues>(defaultValues: T) {
    const filterEmptyFields = useCallback(
        (data: T) =>
            Object.entries(data).reduce<T>((acc, [key, value]) => {
                if (value) {
                    acc[key as keyof T] = value;
                }
                return acc;
            }, {} as T),
        []
    );

    const filterDefaultValues = useCallback(
        (data: FieldValues) =>
            Object.entries(data).reduce<FieldValues>((acc, [key, value]) => {
                if (
                    typeof defaultValues === 'object' &&
                    defaultValues[key as keyof T] !== value
                ) {
                    acc[key] = value;
                }
                return acc;
            }, {} as T),
        [defaultValues]
    );

    const getUpdatedFields = useCallback(
        (data: T) => filterDefaultValues(filterEmptyFields(data)),
        [filterDefaultValues, filterEmptyFields]
    );

    return getUpdatedFields;
}

export default useFilterDefaultFieldValues;
