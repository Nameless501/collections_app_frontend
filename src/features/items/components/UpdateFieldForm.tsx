import { FC, useEffect, useMemo, useState } from 'react';
import {
    FieldValues,
    useForm,
    SubmitHandler,
    useWatch,
    FieldError,
} from 'react-hook-form';
import { UpdateFieldFormPropsType } from '../types/common.types';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { errorsConfig } from '../configs/api.config';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import { Box } from '@mui/material';
import FormWrapper from '../../../components/FormWrapper';
import { useUpdateItemFieldMutation } from '../store/items.slice';
import FormInput from '../../../components/FormInput';
import { buttonsTextConfig } from '../configs/content.config';
import { FieldTypes } from '../../../configs/common.config';
import CheckboxFormInput from './CheckboxFormInput';
import { getFieldValueSchema } from '../configs/validation.config';
import { useTypedDispatch } from '../../../store/store';
import { updateItemField } from '../../../store/ItemData/itemDataSlice';

const UpdateFieldForm: FC<UpdateFieldFormPropsType> = ({
    onSubmit,
    label,
    id,
    value,
    type,
}) => {
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const [updateField, { isLoading }] = useUpdateItemFieldMutation();

    const defaultValue = useMemo(
        () =>
            type === FieldTypes.boolean
                ? { value: value === 'true' }
                : { value },
        [value, type]
    );

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(getFieldValueSchema(type), defaultValue)
    );

    const watch = useWatch({ control });

    const handleSubmitSuccess = (data: { id: number; value: string }) => {
        dispatch(updateItemField(data));
        openSuccessNotification();
        onSubmit();
    };

    const handleFieldUpdate: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const newData = { id, value: `${data.value}` };
            await updateField(newData).unwrap();
            handleSubmitSuccess(newData);
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    useEffect(() => {
        const isDefault = watch.value === defaultValue.value;
        setIsChanged(!isDefault);
    }, [watch, defaultValue]);

    return (
        <Box sx={{ p: 2, minWidth: 300 }}>
            <FormWrapper
                disabled={!isValid || isLoading || !isChanged}
                onSubmit={handleSubmit(handleFieldUpdate)}
                buttonText={buttonsTextConfig.update}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {type === FieldTypes.boolean ? (
                        <CheckboxFormInput
                            control={control}
                            name="value"
                            label={label}
                        />
                    ) : (
                        <FormInput
                            register={register}
                            error={errors.value as FieldError}
                            name="value"
                            label={label}
                        />
                    )}
                </Box>
            </FormWrapper>
        </Box>
    );
};

export default UpdateFieldForm;
