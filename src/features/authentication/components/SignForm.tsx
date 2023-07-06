import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputType, FormPropsType } from '../types/common.types';
import FormInput from './FormInput';
import SignFormWrapper from './SignFormWrapper';
import { signInputsConfig } from '../configs/inputs.config';
import { getHookFormConfig } from '../configs/hookForm.cong';
import { useAuthenticationMutation } from '../store/authentication.slice';
import { SignRedirectionConfig } from '../configs/common.config';
import { handleFetchBaseQueryError } from '../../../utils/helpers.util';

const SignForm: FC<FormPropsType> = ({ type }) => {
    const navigate = useNavigate();

    const location = useLocation();

    const [apiError, seApiError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormInputType>(
        getHookFormConfig(type, { email: location.state?.email })
    );

    const [authenticate, { isLoading }] = useAuthenticationMutation();

    const handleAuthentication = async (data: FormInputType): Promise<void> => {
        seApiError('');
        const user = await authenticate({ type, data }).unwrap();
        navigate(SignRedirectionConfig[type], { state: { email: user.email } });
    };

    const onSubmit: SubmitHandler<FormInputType> = async (
        data
    ): Promise<void> => {
        try {
            await handleAuthentication(data);
        } catch (err) {
            handleFetchBaseQueryError(err, (msg) => seApiError(msg));
        }
    };

    return (
        <SignFormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            isValid={isValid && !isLoading}
            error={apiError}
        >
            {signInputsConfig[type].map((input, index) => (
                <FormInput
                    register={register}
                    {...input}
                    error={errors[input.name]}
                    key={input.name + index}
                />
            ))}
        </SignFormWrapper>
    );
};

export default SignForm;
