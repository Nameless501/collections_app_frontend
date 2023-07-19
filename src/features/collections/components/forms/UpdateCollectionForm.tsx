import { FC, useEffect, useMemo, useState } from 'react';
import { FieldValues, useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { useUpdateCollectionMutation } from '../../store/collections.slice';
import { useNotificationsContext } from '../../../../contexts/NotificationsContext';
import useBaseQueryError from '../../../../hooks/useBaseQueryError';
import { errorsConfig } from '../../configs/api.config';
import { UpdateCollectionFormPropsType } from '../../types/common.types';
import { collectionValidationSchema } from '../../configs/validation.config';
import { getHookFormConfig } from '../../../../configs/hookForm.config';
import CollectionFormInputs from './CollectionFormInputs';
import CollectionFormWrapper from './CollectionFormWrapper';
import { getFormData } from '../../../../utils/helpers.util';
import { Box } from '@mui/material';
import useFilterDefaultFieldValues from '../../../../hooks/useFilterDefaultFieldValues';
import { ICollection } from '../../../../types/slices.types';
import { formButtonsConfig } from '../../configs/form.config';

const UpdateCollectionForm: FC<UpdateCollectionFormPropsType> = ({
    onSubmit,
    collection,
}) => {
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const [updateCollection, { isLoading }] = useUpdateCollectionMutation();

    const defaultValues = useMemo(() => {
        const { subject, title, description } = collection;
        return { subject, title, description };
    }, [collection]);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(
            collectionValidationSchema,
            defaultValues
        )
    );

    const watch = useWatch({ control });

    const getUpdatedFields =
        useFilterDefaultFieldValues<FieldValues>(defaultValues);

    const handleCreateCollection: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const formData = getFormData(getUpdatedFields(data));
            const newCollection = await updateCollection({
                id: collection.id,
                body: formData,
            }).unwrap();
            onSubmit(newCollection as ICollection);
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
        <Box sx={{ p: 2 }}>
            <CollectionFormWrapper
                disabled={!isValid || isLoading || !isChanged}
                onSubmit={handleSubmit(handleCreateCollection)}
                buttonText={formButtonsConfig.update}
            >
                <CollectionFormInputs
                    register={register}
                    control={control}
                    errors={errors}
                />
            </CollectionFormWrapper>
        </Box>
    );
};

export default UpdateCollectionForm;
