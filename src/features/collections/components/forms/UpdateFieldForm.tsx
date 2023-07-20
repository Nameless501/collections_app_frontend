import { FC, useEffect, useMemo, useState } from 'react';
import {
    FieldValues,
    useForm,
    SubmitHandler,
    useWatch,
    FieldError,
} from 'react-hook-form';
import { useUpdateFieldMutation } from '../../store/collections.slice';
import { useNotificationsContext } from '../../../../contexts/NotificationsContext';
import useBaseQueryError from '../../../../hooks/useBaseQueryError';
import { errorsConfig } from '../../configs/api.config';
import { UpdateFieldFormPropsType } from '../../types/common.types';
import { fieldValidationSchema } from '../../configs/validation.config';
import { getHookFormConfig } from '../../../../configs/hookForm.config';
import FormWrapper from '../../../../components/FormWrapper';
import { Box } from '@mui/material';
import useFilterDefaultFieldValues from '../../../../hooks/useFilterDefaultFieldValues';
import FormInput from '../../../../components/FormInput';
import ControlledSelect from '../inputs/ControlledSelect';
import {
    fieldLabelInputConfig,
    fieldTypeSelectConfig,
    formButtonsConfig,
} from '../../configs/form.config';
import { IField } from '../../../../types/slices.types';

const UpdateFieldForm: FC<UpdateFieldFormPropsType> = ({ onSubmit, field }) => {
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const [updateField, { isLoading }] = useUpdateFieldMutation();

    const defaultValues = useMemo(() => {
        const { type, label } = field;
        return { type, label };
    }, [field]);

    console.log(defaultValues);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(fieldValidationSchema, defaultValues)
    );

    const watch = useWatch({ control });

    const getUpdatedFields =
        useFilterDefaultFieldValues<FieldValues>(defaultValues);

    const handleFieldUpdate: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const body = getUpdatedFields(data);
            const newField = await updateField({ id: field.id, body }).unwrap();
            onSubmit(newField as IField);
            openSuccessNotification('Success');
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
        const updatedFields = getUpdatedFields(watch);
        const isDefault = Object.keys(updatedFields).length === 0;
        setIsChanged(!isDefault);
    }, [watch, getUpdatedFields]);

    return (
        <Box sx={{ p: 2, minWidth: 300 }}>
            <FormWrapper
                disabled={!isValid || isLoading || !isChanged}
                onSubmit={handleSubmit(handleFieldUpdate)}
                buttonText={formButtonsConfig.update}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FormInput
                        register={register}
                        error={errors[fieldLabelInputConfig.name] as FieldError}
                        {...fieldLabelInputConfig}
                    />
                    <ControlledSelect
                        multiple={false}
                        config={fieldTypeSelectConfig}
                        control={control}
                        size="medium"
                    />
                </Box>
            </FormWrapper>
        </Box>
    );
};

export default UpdateFieldForm;
