import { FC } from 'react';
import { FieldValues, useForm, FieldError } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { ItemFormInputs } from '../configs/forms.config';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import FormInput from '../../../components/FormInput';
import FormWrapper from '../../../components/FormWrapper';
import { titleInputConfig } from '../configs/forms.config';
import { TagsInput } from '../../tags';
import { Typography } from '@mui/material';
import { buttonsTextConfig, fomTitlesConfig } from '../configs/content.config';
import { useTranslation } from 'react-i18next';
import FieldsInputs from './FieldsInputs';
import { NewItemFormPropsType } from '../types/common.types';

const NewItemForm: FC<NewItemFormPropsType> = ({
    fields,
    defaultValues,
    validationSchema,
    onSubmit,
    disabled,
}) => {
    const { t } = useTranslation();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
        setValue,
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(
            joiResolver(validationSchema),
            defaultValues
        )
    );

    return (
        <FormWrapper
            disabled={!isValid || disabled}
            onSubmit={handleSubmit(onSubmit)}
            buttonText={buttonsTextConfig.add}
        >
            <Typography variant="h5" textAlign="center">
                {t(fomTitlesConfig.newItem)}
            </Typography>
            <FormInput
                {...titleInputConfig}
                register={register}
                error={errors[titleInputConfig.name] as FieldError}
            />
            <TagsInput
                handleTagsAdd={(value) => setValue(ItemFormInputs.tags, value)}
            />
            <FieldsInputs
                fields={fields}
                register={register}
                errors={errors}
                control={control}
            />
        </FormWrapper>
    );
};

export default NewItemForm;
