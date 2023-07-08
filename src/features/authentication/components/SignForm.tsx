import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTypedDispatch } from '../../../store/store';
import { setUserData } from '../../../store/user/userSlice';
import { FormInputType, FormPropsType } from '../types/common.types';
import { SignFormTypes } from '../configs/enums.config';
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

    const dispatch = useTypedDispatch();

    const [apiError, setApiError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormInputType>(
        getHookFormConfig(type, { email: location.state?.email })
    );

    const [authenticate, { isLoading }] = useAuthenticationMutation();

    const setCurrentUser = (user: unknown): void => {
        if (type === SignFormTypes.signIn) {
            dispatch(setUserData(user));
        }
    };

    const handleRedirect = (user: unknown): void => {
        const options = { state: {} };
        if (typeof user === 'object' && user != null && 'email' in user) {
            options.state = { email: user.email };
        }
        navigate(SignRedirectionConfig[type], options);
    };

    const handleAuthentication = async (data: FormInputType): Promise<void> => {
        setApiError('');
        return await authenticate({ type, data }).unwrap();
    };

    const onSubmit: SubmitHandler<FormInputType> = async (
        data
    ): Promise<void> => {
        try {
            const user = await handleAuthentication(data);
            setCurrentUser(user);
            handleRedirect(user);
        } catch (err) {
            handleFetchBaseQueryError(err, (msg) => setApiError(msg));
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
