import { FC } from 'react';
import { FieldsInputsPropsType } from '../types/common.types';
import FormInput from '../../../components/FormInput';
import { ItemFormInputs, getFieldIndexedName } from '../configs/forms.config';
import { FieldTypes } from '../../../configs/common.config';
import CheckboxFormInput from './CheckboxFormInput';

const FieldsInputs: FC<FieldsInputsPropsType> = ({
    fields,
    register,
    errors,
    control,
}) => {
    const getFieldError = (index: number) => {
        let error;
        if (
            ItemFormInputs.fields in errors &&
            Array.isArray(errors[ItemFormInputs.fields])
        ) {
            error = errors[ItemFormInputs.fields][index];
            if ('value' in error) {
                return error.value;
            }
        }
    };

    return (
        <>
            {fields.map(({ id, label, type }, index) =>
                type !== FieldTypes.boolean ? (
                    <FormInput
                        key={id}
                        multiline={type === FieldTypes.text}
                        rows={type === FieldTypes.text ? 3 : 1}
                        label={label}
                        register={register}
                        name={getFieldIndexedName(index)}
                        error={getFieldError(index)}
                    />
                ) : (
                    <CheckboxFormInput
                        key={id}
                        control={control}
                        label={label}
                        name={getFieldIndexedName(index)}
                    />
                )
            )}
        </>
    );
};

export default FieldsInputs;
