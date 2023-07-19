import { FC, useEffect } from 'react';
import { FieldValues, useForm, useFieldArray, FieldError, SubmitHandler } from 'react-hook-form';
import { useCreateFieldsMutation } from '../../store/collections.slice';
import { List, ListItem } from '@mui/material';
import FieldsFormInput from '../inputs/FieldsFormInput';
import { fieldsFormDefaultValues, fieldDefaultValue, formButtonsConfig } from '../../configs/form.config';
import { NewFieldsFormPropsType } from '../../types/common.types';
import ButtonWithIcon from '../../../../components/ButtonWithIcon';
import AddIcon from '@mui/icons-material/Add';
import { FieldsFormInputsType } from '../../types/common.types';
import { fieldsValidationSchema } from '../../configs/validation.config';
import { getHookFormConfig } from '../../../../configs/hookForm.config';
import CollectionFormWrapper from './CollectionFormWrapper';
import { useNotificationsContext } from '../../../../contexts/NotificationsContext';
import useBaseQueryError from '../../../../hooks/useBaseQueryError';
import { errorsConfig } from '../../configs/api.config';
import { IField } from '../../../../types/slices.types';

const NewFieldsForm: FC<NewFieldsFormPropsType> = ({ onSubmit, collectionId }) => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification, openSuccessNotification } = useNotificationsContext();

    const [createFields, { isLoading }] = useCreateFieldsMutation();

    const { register, control, handleSubmit, formState: { errors, isValid } } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(fieldsValidationSchema, fieldsFormDefaultValues)
    );

    const { fields, append, remove } = useFieldArray({
        control,
        name: "fields",
        rules: { minLength: 1 }
    });

    const handleFieldsFormSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const fields = await createFields({ id: collectionId, fields: data.fields as FieldsFormInputsType }).unwrap();
            openSuccessNotification('Success');
            onSubmit(fields as IField[]);
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
            onSubmit={handleSubmit(handleFieldsFormSubmit)}
            buttonText={formButtonsConfig.create}
        >
            <List sx={{ width: '100%', maxHeight: 350, overflowY: 'scroll' }}>
                {fields.map((field, index) => (
                    <ListItem key={field.id} sx={{ my: 1.5, px: 0 }}>
                        <FieldsFormInput
                            control={control}
                            register={register}
                            remove={() => remove(index)}
                            index={index}
                            errors={errors.fields as FieldError}
                        />
                    </ListItem>
                ))}
                <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ButtonWithIcon
                        tooltip='Add more field'
                        icon={AddIcon}
                        handleClick={() => append(fieldDefaultValue)}
                        disabled={!isValid}
                        color='primary'
                        large={true}
                    />
                </ListItem>
            </List>
        </CollectionFormWrapper>
    );
};

export default NewFieldsForm;
