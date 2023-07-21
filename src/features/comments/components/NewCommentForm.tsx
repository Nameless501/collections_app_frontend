import { FC } from 'react';
import {
    FieldValues,
    useForm,
    FieldError,
    SubmitHandler,
} from 'react-hook-form';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import FormWrapper from '../../../components/FormWrapper';
import { Paper } from '@mui/material';
import FormInput from '../../../components/FormInput';
import { NewCommentFormPropsType } from '../types/common.types';
import {
    commentInputConfig,
    newCommentDefaultValue,
    newCommentValidationSchema,
} from '../configs/form.config';
import { formButtonsConfig } from '../configs/content.config';

const NewCommentForm: FC<NewCommentFormPropsType> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(
            newCommentValidationSchema,
            newCommentDefaultValue
        )
    );

    const submitHandler: SubmitHandler<FieldValues> = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <Paper sx={{ p: 2, width: '100%', maxWidth: 500 }}>
            <FormWrapper
                disabled={!isValid}
                onSubmit={handleSubmit(submitHandler)}
                buttonText={formButtonsConfig.newComment}
            >
                <FormInput
                    register={register}
                    error={errors[commentInputConfig.name] as FieldError}
                    {...commentInputConfig}
                />
            </FormWrapper>
        </Paper>
    );
};

export default NewCommentForm;
