import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox } from '@mui/material';
import { FieldsInputsPropsType } from '../types/common.types';
import FormInput from '../../../components/FormInput';
import { ItemFormInputs, getFieldIndexedName } from '../configs/forms.config';
import { FieldTypes } from '../../../configs/common.config';

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
                    <FormControlLabel
                        key={id}
                        control={
                            <Controller
                                name={getFieldIndexedName(index)}
                                control={control}
                                render={({ field: props }) => (
                                    <Checkbox
                                        {...props}
                                        checked={props.value}
                                        onChange={(e) =>
                                            props.onChange(e.target.checked)
                                        }
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                        }}
                                    />
                                )}
                            />
                        }
                        label={label}
                        sx={{ width: 'fit-content', alignSelf: 'center' }}
                    />
                )
            )}
        </>
    );
};

export default FieldsInputs;
