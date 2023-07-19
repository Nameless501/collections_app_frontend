import { FC, useEffect } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { useTypedDispatch } from '../../../../store/store';
import { useCreateCollectionMutation } from '../../store/collections.slice';
import { collectionFormDefaultValues, formButtonsConfig } from '../../configs/form.config';
import { useNotificationsContext } from '../../../../contexts/NotificationsContext';
import useBaseQueryError from '../../../../hooks/useBaseQueryError';
import { errorsConfig } from '../../configs/api.config';
import { addUserCollection } from '../../../../store/userCollections/userCollectionsSlice';
import { NewCollectionFormPropsType } from '../../types/common.types';
import { collectionValidationSchema } from '../../configs/validation.config';
import { getHookFormConfig } from '../../../../configs/hookForm.config';
import CollectionFormInputs from './CollectionFormInputs';
import CollectionFormWrapper from './CollectionFormWrapper';
import { getFormData } from '../../../../utils/helpers.util';

const NewCollectionDataForm: FC<NewCollectionFormPropsType> = ({ onSubmit }) => {
    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification } = useNotificationsContext();

    const [createCollection, { isLoading }] = useCreateCollectionMutation();

    const { register, control, handleSubmit, formState: { errors, isValid } } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(
            collectionValidationSchema,
            collectionFormDefaultValues,
        ));

    const handleCreateCollection: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const formData = getFormData(data);
            const collection = await createCollection(formData).unwrap();
            dispatch(addUserCollection(collection));
            onSubmit(collection);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <CollectionFormWrapper
            disabled={!isValid || isLoading}
            onSubmit={handleSubmit(handleCreateCollection)}
            buttonText={formButtonsConfig.next}
        >
            <CollectionFormInputs
                register={register}
                control={control}
                errors={errors}
            />
        </CollectionFormWrapper>
    );
};

export default NewCollectionDataForm;
