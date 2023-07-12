import { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTypedDispatch } from '../../../store/store';
import { setUserData } from '../../../store/user/userSlice';
import { FormInputType, FormPropsType } from '../types/common.types';
import { SignFormInputs, SignFormTypes } from '../configs/enums.config';
import FormInput from './FormInput';
import SignFormWrapper from './SignFormWrapper';
import { signInputsConfig } from '../configs/inputs.config';
import { useAuthenticationMutation } from '../store/authentication.slice';
import { signRedirectionConfig, errorsConfig } from '../configs/common.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import { signValidationSchema } from '../configs/validation.config';
import { signFormConfig } from '../configs/form.config';
import { AppRoutes } from '../../../configs/routes.config';

export const SignForm: FC<FormPropsType> = ({ type }) => {
    const navigate = useNavigate();

    const location = useLocation();

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        clearErrors,
        reset,
        setValue,
    } = useForm<FormInputType>(
        getHookFormConfig<FormInputType>(signValidationSchema[type], {})
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
        navigate(signRedirectionConfig[type], options);
    };

    const handleAuthentication = async (data: FormInputType): Promise<void> => {
        resetApiError();
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
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        clearErrors();
        reset();
        if (location.pathname === AppRoutes.signIn) {
            setValue(SignFormInputs.email, location.state?.email);
        }
    }, [clearErrors, reset, location, setValue]);

    return (
        <SignFormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            isValid={isValid && !isLoading}
            error={apiError}
            config={signFormConfig[type]}
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
